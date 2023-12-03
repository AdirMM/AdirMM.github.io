import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [inputName, setInputName] = useState('');
    const [labelName, setLabelName] = useState('JANE APPLESEED');
    const [inputCardNumbers, setInputCardNumbers] = useState('');
    const [labelCardNumber, setLabelCardNumber] = useState('0000 0000 0000 0000');
    const [inputMonth, setInputMonth] = useState('');
    const [labelMonth, setLabelMonth] = useState('00');
    const [inputYear, setInputYear] = useState('');
    const [labelYear, setLabelYear] = useState('00');
    const [inputCCV, setInputCCV] = useState('');
    const [labelCCV, setLabelCCV] = useState('000');

    const [formVisible, setFormVisible] = useState(true);

    return (
        <FormContext.Provider value={{
            inputName, setInputName,
            labelName, setLabelName,
            inputCardNumbers, setInputCardNumbers,
            labelCardNumber, setLabelCardNumber,
            inputMonth, setInputMonth,
            labelMonth, setLabelMonth,
            inputYear, setInputYear,
            labelYear, setLabelYear,
            inputCCV, setInputCCV,
            labelCCV, setLabelCCV,
            formVisible, setFormVisible,
        }}>
            {children}
        </FormContext.Provider>
    );
};

// Hook to access the context

const useFormContext = () => {
    return useContext(FormContext);
};

export {FormProvider, useFormContext};