import React, { useState } from 'react';
import { Button, ColumnContainer, ErrorLabelsDateCCV, FormContainer, Input, Label, RowContainer } from '../elements/FormElements';
import { useFormContext } from './FormContext';

const Form = () => {
    const [errorCardName, setErrorCardName] = useState('');
    const [errorCardNumbers, setErrorCardNumbers] = useState('');
    const [errorDateMM, setErrorDateMM] = useState('');
    const [errorDateYY, setErrorDateYY] = useState('');
    const [errorCCV, setErrorCCV] = useState('');

    const { inputName, setInputName, setLabelName, inputCardNumbers, setInputCardNumbers, labelCardNumber,
        setLabelCardNumber, inputMonth, setInputMonth, setLabelMonth,
        inputYear, setInputYear, setLabelYear, inputCCV, setInputCCV, setLabelCCV, setFormVisible }
        = useFormContext();

    const handleNameChange = (e) => {
        const value = e.target.value;

        // 📝 Remove all numbers and/or symbols 
        const formattedValue = value.replace(/[^a-zA-Z\s]/g, '');

        setInputName(formattedValue);
        setLabelName(formattedValue.toUpperCase());
    };

    const handleCardNumbersChange = (e) => {
        const value = e.target.value;

        let formattedLabelNumbers = value.match(/\d/g);
        if (formattedLabelNumbers) {
            formattedLabelNumbers = formattedLabelNumbers.join('');
            // Agregar espacios entre cada grupo de 4 dígitos
            formattedLabelNumbers = formattedLabelNumbers.replace(/(\d{4})/g, '$1 ');

            const totalLengthWithoutSpaces = formattedLabelNumbers.replace(/\s/g, '').length;
            if (totalLengthWithoutSpaces === 16) {
                // Eliminar espacio al final si se alcanzan 16 dígitos
                formattedLabelNumbers = formattedLabelNumbers.trim();
            }
        } else {
            formattedLabelNumbers = '';
        }

        // Obtener la posición del cursor para mantenerla después de la actualización
        const cursorPosition = e.target.selectionStart;

        // Actualizar cada dígito manteniendo el formato de grupos de 4
        const newLabel = labelCardNumber
            .split('')
            .map((char, index) => {
                if (char === ' ') {
                    return ' ';
                }
                return formattedLabelNumbers[index] || '0';
            })
            .join('');

        setInputCardNumbers(formattedLabelNumbers);
        setLabelCardNumber(newLabel);

        e.target.setSelectionRange(cursorPosition, cursorPosition);
    };

    const handleDateAndCCV = (e) => {
        const value = e.target.value;

        // 📝 Delete everything that isn't number
        const formattedValue = value.replace(/[^0-9]/g, '');

        switch (e.target.name) {
            case 'month':
                setInputMonth(formattedValue);
                setLabelMonth(formattedValue.padStart(2, '0'));
                break;
            case 'year':
                setInputYear(formattedValue);
                setLabelYear(formattedValue.padStart(2, '0'));
                break;
            case 'ccv':
                setInputCCV(formattedValue);
                setLabelCCV(formattedValue);
                break;
        }
    };

    const cleanErrors = () => {
        setErrorCardName(''), setErrorCardNumbers(''), setErrorDateMM(''), setErrorDateYY(''), setErrorCCV('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        cleanErrors();

        let hasErrors = false;
        const currentYear = new Date().getFullYear();

        if (inputName === '') {
            setErrorCardName("Can't be blank");
            hasErrors = true;
        }

        if (inputCardNumbers === '') {
            setErrorCardNumbers("Can't be blank");
            hasErrors = true;
        } else if (!/^[0-9\s]+$/.test(inputCardNumbers || inputCardNumbers.length < 16)) {
            setErrorCardNumbers('Wrong format or incomplete card numbers');
            hasErrors = true;
        };

        if (inputMonth === '') {
            setErrorDateMM("Can't be blank");
            hasErrors = true;
        } else if (/^\d{1,2}$/.test(inputMonth)) {
            let monthNumber = parseInt(inputMonth, 10);

            // ✅ Validate that the month is in the range of 1 to 12.
            if (monthNumber >= 1 && monthNumber <= 12) {
                setErrorDateMM('');
            } else {
                setErrorDateMM('Enter a valid month');
                hasErrors = true;
            }
        }

        if (inputYear === '') {
            setErrorDateYY("Can't be blank");
            hasErrors = true;
        } else if (/^\d{1,2}$/.test(inputYear)) {
            let yearNumber = parseInt(inputYear, 10);

            // ✅ Validate that the  month is in the acceptable range, for example from the current year to 10 years in the future. 
            if (yearNumber >= currentYear % 100 && yearNumber <= currentYear % 100 + 10) {
                setErrorDateYY('');
            } else {
                setErrorDateYY('Enter a valid year');
                hasErrors = true;
            }
        }

        if (inputCCV === '') {
            setErrorCCV("Can't be blank");
            hasErrors = true;
        } else if (inputCCV.length < 3) {
            setErrorCCV("Enter a valid CCV");
            hasErrors = true;
        }

        // 📍 Make sure there are no errors, and if there aren't, hide form.
        !hasErrors && setFormVisible(false);
    }

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <ColumnContainer>
                    <Label marginBottom fontSize uppercase >Cardholder name</Label>
                    <Input
                        inputLarge
                        type='text'
                        placeholder='e.g. Jane Appleseed'
                        onChange={handleNameChange}
                        value={inputName}
                        inputError={errorCardName}
                    />

                    {/* ❌ Error Label */}
                    {errorCardName && 
                        <Label fontSizeLabel translateErrorLabelRespNameNumbers
                            style={{ color: 'red'}}
                        >
                            {errorCardName}
                        </Label>
                    }

                    <Label marginTop uppercase marginBottom >Card number</Label>
                    <Input
                        inputLarge
                        placeholder='e.g. 1234 5678 9123 0000'
                        onChange={handleCardNumbersChange}
                        value={inputCardNumbers}
                        maxLength="19"
                        inputError={errorCardNumbers}
                    />

                    {/*❌ Error Label */}
                    {errorCardNumbers &&
                        <Label fontSizeLabel translateErrorLabelRespNameNumbers
                            style={{ color: 'red' }}
                        >
                            {errorCardNumbers}
                        </Label>
                    }

                </ColumnContainer>

                <Label
                    uppercase fontSize marginRightLabel marginBottom
                    style={{ marginTop: '7px', display: 'inline-block' }}
                >
                    exp. date (mm/yy)
                </Label>
                <Label fontSize marginRightLabel> CCV </Label>

                <RowContainer marginTopRowCont>
                    <Input
                        name='month'
                        inputShort
                        marginRightInput
                        placeholder='MM'
                        onChange={handleDateAndCCV}
                        value={inputMonth}
                        maxLength='2'
                        inputError={errorDateMM}
                    />

                    <Input
                        name='year'
                        inputShort
                        marginRightInputMinus
                        placeholder='YY'
                        onChange={handleDateAndCCV}
                        value={inputYear}
                        maxLength='2'
                        inputError={errorDateYY}
                    />

                    <Input
                        name='ccv'
                        inputMedium
                        MarginRightInputNull
                        placeholder='e.g. 123'
                        onChange={handleDateAndCCV}
                        value={inputCCV}
                        maxLength='3'
                        inputError={errorCCV}
                    />
                </RowContainer>

                <RowContainer>

                    <ErrorLabelsDateCCV widthErrorLabel translateErrorLabelDate> 
                        {/* ❌ Error Label */}
                        {errorDateMM &&
                            <Label style={{ color: 'red'}} fontSizeLabel
                            >
                                {errorDateMM}
                            </Label>

                        }
                    </ErrorLabelsDateCCV >

                    <ErrorLabelsDateCCV widthErrorLabel translateErrorLabelDate>
                        {/* ❌ Error Label */} 
                        {errorDateYY &&
                            <Label style={{ color: 'red' }} fontSizeLabel
                            >
                                {errorDateYY}
                            </Label>
                        }
                    </ErrorLabelsDateCCV>

                    <ErrorLabelsDateCCV translateErrorLabelCCV>
                        {/* ❌ Error Label */}
                        {errorCCV &&
                            <Label style={{ color: 'red' }} fontSizeLabel
                            >
                                {errorCCV}
                            </Label>
                        }
                    </ErrorLabelsDateCCV>

                </RowContainer>

                <Button type='submit'>Confirm</Button>
            </FormContainer>
        </>
    );
}

export default Form;