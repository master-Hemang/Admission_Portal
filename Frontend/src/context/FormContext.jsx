import React, { createContext, useContext, useState } from 'react';

export const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

 const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    const updateFormData = (data) => {
        setFormData(prevData => ({
            ...prevData,
            ...data,
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;

