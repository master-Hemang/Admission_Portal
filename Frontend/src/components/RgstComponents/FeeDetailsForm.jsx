import React, { useState,useEffect } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const FeeDetailsForm = ({ handleNext, handlePrev }) => {
    const {formData, updateFormData } = useFormContext();
    const [form, setForm] = useState({
        feeAmount:formData.feeAmount ||'',
        feeDate: formData.feeDate ||'',
        feeMode: formData.feeMode ||'',
        transactionId: formData.transactionId ||''
    });

    // useEffect(()=>{
    //         const fetchValuesFromBackend = async () => {
    //             const response = await fetch('http://localhost:5000/api/getFeeDetails');
    //             const data = await response.json();
    //             return data;
    //         }
    //         fetchValuesFromBackend().then((data)=>{
    //             setForm((prevForm)=>({
    //                 ...prevForm,
    //                 feeAmount:data.feeAmount || '',
    //                 feeDate:data.feeDate || '',
    //                 feeMode:data.feeMode || '',
    //                 transactionId:data.transactionId || ''
    //             }))
    //         })
    // },[])
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const validateForm = () => {
        for (let key in form) {
            if (form[key] === '') {
                alert(`Please fill ${key} field`);
                return false;
            }
        }
        return true;
    };

    const NextPage = () => {
        if (validateForm()) {
            updateFormData(form);
            handleNext();
        }
    };

    const PrevPage = () => {
        handlePrev();
    };

    // Array of field configurations
    const fields = [
        { name: 'feeAmount', label: 'Fee Amount', type: 'text' },
        { name: 'feeDate', label: 'Fee Date', type: 'date' },
        { name: 'feeMode', label: 'Fee Mode', type: 'text' },
        { name: 'transactionId', label: 'Transaction ID', type: 'text' }
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Fee Details</Typography>
            </Grid>
            {fields.map((field, index) => (
                <Grid item xs={12} sm={4} key={index}>
                    <TextField
                        required
                        fullWidth
                        label={field.label}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        type={field.type}
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Button variant="contained" onClick={PrevPage}>Previous</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={NextPage}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FeeDetailsForm;
