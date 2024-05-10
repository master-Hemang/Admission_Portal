import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const CCAForm = ({ handleNext }) => {
    const { formData, updateFormData } = useFormContext();
    const [form, setForm] = useState({
        cca: formData.cca || '',
        ECAsports: formData.ECAsports || '',
        majorGame: formData.majorGame || '',
        minorGame: formData.minorGame || '',
    });

    const handleChange = (event, fieldName) => {
        const value = event.target.value;
        setForm({
            ...form,
            [fieldName]: value,
        });
    };

    const NextPage = () => {
        if (form.cca !== '' && form.ECAsports !== '') {
            updateFormData(form);
            handleNext();
        } else {
            alert("Enter a valid CCA and ECA/Sports");
        }
    };

    const fields = [
        { label: 'CCA', name: 'cca', required: true }, 
        { label: 'ECA/Sports', name: 'ECAsports', required: true }, 
        { label: 'Major Game', name: 'majorGame', required: false }, 
        { label: 'Minor Game', name: 'minorGame', required: false }, 
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">CCA Details</Typography>
            </Grid>
            {fields.map((field, index) => (
                <Grid item xs={12} sm={4} key={index}>
                    <TextField
                        fullWidth
                        label={field.label}
                        value={form[field.name]}
                        onChange={(e) => handleChange(e, field.name)}
                        required={field.required}
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button variant="contained" onClick={NextPage}>Next</Button>
            </Grid>
        </Grid>
    );
};

export default CCAForm;
