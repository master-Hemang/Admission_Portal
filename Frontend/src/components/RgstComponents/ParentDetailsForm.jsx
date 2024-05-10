import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const ParentDetailsForm = ({ handleNext, handlePrev }) => {
    const { formData,updateFormData } = useFormContext();
    const [form, setForm] = useState({
        fatherName: formData.fatherName ||'',
        motherName: formData.motherName ||'',
        fatherOccupation: formData.fatherOccupation ||'',
        motherOccupation: formData.motherOccupation ||'',
        fatherIncome: formData.fatherIncome ||'',
        motherIncome: formData.motherIncome ||'',
        parentMobile: formData.parentMobile ||'',
        parentEmail: formData.parentEmail ||'',
        guardianName: formData.guardianName ||'',
        guardianOccupation: formData.guardianOccupation ||'',
        alternateMobile: formData.alternateMobile ||'',
        alternateEmail: formData.alternateEmail ||'',
        bankName: formData.bankName ||'',
        accountNumber: formData.accountNumber ||'',
        confirmAccountNumber: formData.confirmAccountNumber ||'',
        ifscCode: formData.ifscCode || '',
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        console.log(form);
        const requiredFields = ['fatherName', 'motherName', 'fatherOccupation', 'motherOccupation', 'fatherIncome', 'motherIncome', 'parentMobile', 'parentEmail', 'bankName', 'accountNumber', 'confirmAccountNumber', 'ifscCode'];
        for (let key of requiredFields) {
            if (form[key] === '') {
                alert(`Please fill ${key} field`);
                return false;
            }
            if(form.parentaccountNumber!==form.parentconfirmAccountNumber){
                alert(`Account Number and Confirm Account Number should be same`);
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

    const fields = [
        { label: "Father's Name", name: "fatherName" ,required: true},
        { label: "Mother's Name", name: "motherName" ,required: true},
        { label: "Father's Occupation", name: "fatherOccupation", required: true},
        { label: "Mother's Occupation", name: "motherOccupation", required: true},
        { label: "Father's Income", name: "fatherIncome", required: true},
        { label: "Mother's Income", name: "motherIncome" ,required: true},
        { label: "Parent's Mobile Number", name: "parentMobile", required: true},
        { label: "Parent's Email Id", name: "parentEmail", required: true},
        { label: "Guardian's Name", name: "guardianName", required: false},
        { label: "Guardian's Occupation", name: "guardianOccupation", required: false},
        { label: "Alternate Mobile Number", name: "alternateMobile", required: false},
        { label: "Alternate Email Id", name: "alternateEmail", required: false},
        { label: "Bank Name (of parent)", name: "parentbankName", required: true},
        { label: "Account Number (of parent)", name: "parentaccountNumber", required: true},
        { label: "Confirm Account No (of parent)", name: "parentconfirmAccountNumber" ,required: true},
        { label: "IFSC Code (of parent)", name: "parentifscCode", required: true}
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Parent Details</Typography>
            </Grid>
            {fields.map((field, index) => (
                <Grid item xs={3}  key={index}>
                    <TextField
                        required={field.required}
                        fullWidth
                        label={field.label}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
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

export default ParentDetailsForm;
