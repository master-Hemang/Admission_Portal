import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const IITISMEmailForm = ({ handleNext, handlePrev }) => {
    const { formData,updateFormData } = useFormContext();
    const [form, setForm] = useState({
        emailUsername: formData.emailUsername||'',
        emailPassword: formData.emailPassword||''
    });

    const handleChange = (event, field) => {
        const value = event.target.value;
        setForm({
            ...form,
            [field]: value
        });
    };

    const validateForm = () => {
        console.log(form);
        if (form.emailUsername === '') {
            alert(`Please fill emailUsername field`);
            return false;
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
        { label: 'Email username', name: 'emailUsername' },
        { label: 'Email Password', name: 'emailPassword' }
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">IITISM Details</Typography>
            </Grid>
            {fields.map((field, index) => (
                <Grid item xs={12} sm={4} key={index}>
                    <TextField
                        required
                        fullWidth
                        label={field.label}
                        name={field.name}
                        value={form[field.name]}
                        onChange={(e) => handleChange(e, field.name)}
                    />
                </Grid>
            ))}
            <Grid item xs={6}>
                <Button variant="contained" onClick={PrevPage} style={{ float: 'left' }}>Previous</Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={NextPage}>Next</Button>
            </Grid>
        </Grid>
    );
};

export default IITISMEmailForm;
