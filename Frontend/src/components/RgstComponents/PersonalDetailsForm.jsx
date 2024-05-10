import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import { useFormContext } from '../../context/FormContext';

const PersonalDetailsForm = ({ handlePrev, handleNext }) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const { formData,updateFormData } = useFormContext();

    const [form, setForm] = useState({
        jeeMainApplication: formData.jeeMainApplication ||'',
        instituteName: formData.instituteName ||'',
        firstName: formData.firstName ||'',
        middleName: formData.middleName ||'',
        lastName: formData.lastName ||'',
        email: formData.email ||'',
        contactNo: formData.contactNo ||'',
        category: formData.category ||'',
        allotedCategory: formData.allotedCategory ||'',
        dob: formData.dob ||'',
        gender: formData.gender||'Male',
        preparatory:formData.preparatory ||'',
        divyang: formData.divyang||'yes',
        adhaarNo: formData.adhaarNo||'',
        country: formData.country ||'',
        state: formData.state ||'',
        city: formData.city ||'',
        pincode: formData.pincode ||'',
        pa1: formData.pa1 ||'',
        pa2: formData.pa2 ||'',
        bloodgroup: formData.bloodgroup ||'',
        nationality: formData.national ||'',
        religion:   formData.religion ||'',
        birthPlace:   formData.birthPlace ||'',
        photo:  formData.photo ||'',
        sign:formData.sign ||'',
    });

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        console.log(name)
        if (type === 'file') {
            setForm({
                ...form,
                [name]: files[0],
            });
        } else {
            setForm({
                ...form,
                [name]: value,
            });
        }
    };
    const validateForm = () => {
        for (const field of fields) {
            if (field.required && !form[field.name]) {
                alert(`Please fill out ${field} fields`);
                return false;
            }
        }
        return true;
    };

    const handleNextPage = () => {
        const isFormValid = validateForm();
        if (isFormValid) {
            updateFormData(form);
            handleNext();
        }
    };

    const fields = [
        { label: 'JEE Main Application', name: 'jeeMainApplication', required: true },
        { label: 'Institute Name', name: 'instituteName', required: true },
        { label: 'First Name', name: 'firstName', required: true },
        { label: 'Middle Name', name: 'middleName', required: false },
        { label: 'Last Name', name: 'lastName', required: true },
        { label: 'Email', name: 'email', required: true },
        { label: 'Contact Number', name: 'contactNo', required: true },
        { label: 'Category', name: 'category', required: true },
        { label: 'Alloted Category', name: 'allotedCategory', required: true },
        { label: 'Date of Birth', name: 'dob', type: 'date', required: true },
        { label: 'Gender', name: 'gender', select: true, options: ['Male', 'Female', 'Other'], required: true },
        { label: 'Preparatory', name: 'preparatory', required: true },
        { label: 'Divyang', name: 'divyang', select: true, options: ['Yes', 'No'], required: true },
        { label: 'Aadhaar Number', name: 'adhaarNo', required: false },
        { label: 'Country', name: 'country', required: true },
        { label: 'State', name: 'state', required: true },
        { label: 'City', name: 'city', required: true },
        { label: 'Pin Code', name: 'pincode', required: true },
        { label: 'Permanent Address 1', name: 'pa1', required: true },
        { label: 'Permanent Address 2', name: 'pa2', required: false },
        { label: 'Blood Group', name: 'bloodgroup', required: true },
        { label: 'Nationality', name: 'nationality', required: true },
        { label: 'Religion', name: 'religion', required: true },
        { label: 'Birth Place', name: 'birthPlace', required: true },
        { label: 'Photo', name: 'photo', type: 'file', required: true },
        { label: 'Signature', name: 'sign', type: 'file', required: true }
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Personal Details</Typography>
            </Grid>
            {fields.map((field, index) => (
                <Grid item xs={3}  key={index}>
                    <TextField
                        fullWidth
                        label={field.label}
                        name={field.name}
                        value={field.type !== 'file' ? form[field.name] : undefined}
                        onChange={handleChange}
                        required={field.required}
                        select={field.select}
                        SelectProps={field.select ? { native: true } : undefined}
                        InputLabelProps={field.type === 'date' ? { shrink: true } : undefined}
                        type={field.type}
                        inputProps={{ accept: 'application/pdf' }} 
                    >
                        {field.options && field.options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </TextField>
                </Grid>
            ))}
            <Grid item xs={12}></Grid>
           <Grid item xs={3}>
             {form.photo && (
               <div style={{ border: '1px solid #000', width: '300px', height: '260px', overflow: 'auto' }}>
            <Document file={form.photo}>
                <Page pageNumber={1} />
            </Document>
             </div>
               )}
        </Grid>
        <Grid item xs={3}>
             {form.sign && (
               <div style={{ border: '1px solid #000', width: '300px', height: '260px', overflow: 'auto' }}>
            <Document file={form.sign}>
                <Page pageNumber={1}/>
            </Document>
             </div>
               )}
        </Grid>
        <Grid item xs={12}></Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={handlePrev} style={{ float: 'left' }}>Previous</Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={handleNextPage}>Next</Button>
            </Grid>
        </Grid>
    );
};

export default PersonalDetailsForm;
