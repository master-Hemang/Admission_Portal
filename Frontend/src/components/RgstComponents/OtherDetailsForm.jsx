import React, { useState ,useEffect} from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const OtherDetailsForm = ({ handleNext, handlePrev }) => {
    const {formData, updateFormData } = useFormContext();

    const [form, setForm] = useState({
        nameInHindi: formData.nameInHindi ||'',
        maritialStatus: formData.maritialStatus ||'',
        kashmiriImmigrant: formData.kashmiriImmigrant ||'',
        identificationMark: formData.identificationMark ||'',
        extraCircurricularActivity: formData.extraCircurricularActivity ||'',
        otherRelevantInfo: formData.otherRelevantInfo ||'',
        favoritePastTime:formData.favoritePastTime ||'',
        hobbies: formData.hobbies ||'',
        jeeAdvance: 'xxxx',
        courseCode: 'xxxx',
        course: 'xxxx',
        branch: 'xxxx',
        jeeAdvanceRank: formData.jeeAdvanceRank ||'',
        jeeAdvanceCategoryRank:formData.jeeAdvanceCategoryRank ||'',
        bankName:formData.bankName ||'',
        accountNumber: formData.accountNumber ||'',
        confirmAccountNumber: formData.confirmAccountNumber ||'',
        ifscCode: formData.ifscCode||''
    });

    // useEffect(() => {
    //     const fetchValuesFromBackend = async () => {    
    //         const response = await fetch('http://localhost:5000/api/getJeeAdvanceDetails');
    //         const data = await response.json();
    //         return data;
    //     };
    //     fetchValuesFromBackend().then((data) => {
    //         setForm((prevForm) => ({
    //             ...prevForm,
    //             jeeAdvance: data.jeeAdvance || '',
    //             courseCode: data.courseCode || '',
    //             course: data.course || '',
    //             branch: data.branch || ''
    //         }));
    //     });
    // }, []);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        console.log(form);
        const requiredFields = ['nameInHindi', 'maritialStatus', 'kashmiriImmigrant', 'identificationMark', 'jeeAdvanceRank', 'jeeAdvanceCategoryRank', 'bankName', 'accountNumber', 'confirmAccountNumber', 'ifscCode'];
        for (let key of requiredFields) {
            if (form[key] === '') {
                alert(`Please fill ${key} field`);
                return false;
            }
        }
        if(form.accountNumber !== form.confirmAccountNumber){
            alert("Account Number and Confirm Account Number should be same");
            return false;
        }
        return true;
    }

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
        { label: "Name in Hindi", name: "nameInHindi" ,required: true},
        { label: "Maritial Status", name: "maritialStatus", required: true},
        { label: "Kashmiri Immigrant", name: "kashmiriImmigrant", required: true},
        { label: "Identification Mark", name: "identificationMark" ,required: true},
        { label: "ExtraCircurricular Activity", name: "extraCircurricularActivity", required: false},
        { label: "Other Relevant Info", name: "otherRelevantInfo", required: false},
        { label: "Favorite Past Time", name: "favoritePastTime" ,required: false},
        { label: "Hobbies", name: "hobbies", required: false},
        { label: "JEE (ADVANCE) Rank", name: "jeeAdvanceRank", required: true},
        { label: "JEE (ADVANCE) Category Rank", name: "jeeAdvanceCategoryRank", required: true},
        { label: "Bank Name (of student)", name: "bankName", required: true},
        { label: "Account Number (of student)", name: "accountNumber", required: true},
        { label: "Confirm Account No (of student)", name: "confirmAccountNumber", required: true},
        { label: "IFSC Code (of student)", name: "ifscCode", required: true}
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Other Details</Typography>
            </Grid>
            {fields.map((field, index) => (
                <Grid item xs={3} key={index}>
                    <TextField
                        required={field.required}
                        fullWidth
                        name={field.name}
                        label={field.label}
                        value={form[field.name]}
                        onChange={handleChange}
                    />
                </Grid>
            ))}
            <Grid item xs={12}></Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={PrevPage} style={{ float: 'left' }}>Previous</Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={NextPage}>Next</Button>
            </Grid>
        </Grid>
    );
};

export default OtherDetailsForm;
