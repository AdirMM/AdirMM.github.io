import React from 'react';
import { LogoCheck, FirstLabel, SecondLabel, ThanksContainer } from '../elements/ThanksElements';
import { Button } from '../elements/FormElements';
import { useFormContext } from './FormContext';

const Thanks = () => {
    const { setInputName, setLabelName, setInputCardNumbers,
        setLabelCardNumber, setInputMonth, setLabelMonth,
        setInputYear, setLabelYear, setInputCCV, setLabelCCV, setFormVisible } = useFormContext();

    const handleClick = () => {
        setInputName(''), setLabelName('JANE APPLESEED'), setInputCardNumbers(''),
        setLabelCardNumber('0000 0000 0000 0000'), setInputMonth(''), setLabelMonth('00'), 
        setInputYear(''), setLabelYear('00'), setInputCCV(''), setLabelCCV('00'),
        setFormVisible(true);
    }
    
    return (
        <>
            <ThanksContainer>
                <LogoCheck />
                <FirstLabel>Thank you!</FirstLabel>
                <SecondLabel >We've added your card details</SecondLabel>
                <Button top width left onClick={handleClick}>Continue</Button>
            </ThanksContainer>
        </>
    );
}

export default Thanks;