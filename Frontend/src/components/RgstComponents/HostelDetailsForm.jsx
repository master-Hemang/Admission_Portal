import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const HostleDetailsForm = ({ handleNext, handlePrev }) => {
    const {formData, updateFormData } = useFormContext();
    const [form, setForm] = useState({
        foodHabbit: formData.foodHabbit||'Non Veg',
        details: formData.details||'',
        laptop: {
            modelNo: formData.laptop ? formData.laptop.modelNo||'':'',
            serialNo:formData.laptop ? formData.laptop.serialNo||'':''
        }
    });

    const handleChange = (event, field, subField = '') => {
        const value = event.target.value;
        if (subField) {
            setForm({
                ...form,
                [field]: {
                    ...form[field],
                    [subField]: value
                }
            });
        } else {
            setForm({
                ...form,
                [field]: value
            });
        }
    };

    const validateForm = () => {
        console.log(form);
        if (form.foodHabbit === '') {
            alert(`Please fill foodHabbit field`);
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

    const laptopFields = [
        { label: 'Model No', name: 'modelNo' },
        { label: 'Serial No', name: 'serialNo' }
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Hostels Details</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label="Food Habbit"
                    name="foodHabbit"
                    value={form.foodHabbit}
                    select
                    SelectProps={{ native: true }}
                    onChange={(e) => handleChange(e, 'foodHabbit')}
                >
                    <option value="veg">Non-Veg</option>
                    <option value="non-veg">Veg</option>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="If Having Laptop(give details)"
                    name="details"
                    value={form.details}
                    onChange={(e) => handleChange(e, 'details')}
                />
            </Grid>
            {laptopFields.map((field, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <TextField
                        fullWidth
                        label={field.label}
                        name={field.name}
                        value={form.laptop[field.name]}
                        onChange={(e) => handleChange(e, 'laptop', field.name)}
                    />
                </Grid>
            ))}
            <Grid item xs={6}>
                <Button variant="contained" onClick={PrevPage} style={{ float: 'left' }}>
                    Previous
                </Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={NextPage}>
                    Next
                </Button>
            </Grid>
        </Grid>
    );
};

export default HostleDetailsForm;
