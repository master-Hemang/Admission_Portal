import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import { useFormContext } from '../../context/FormContext'; // adjust the path as needed
const EducationDetailsForm = ({ handleNext, handlePrev }) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const { formData,updateFormData } = useFormContext();
    const [form, setFormData] = useState({
        tenth: {
            nameOfExamination: formData.tenth ? formData.tenth.nameOfExamination || '' : '',
            universityBoard:formData.tenth? formData.tenth.universityBoard ||'':'',
            year: formData.tenth?formData.tenth.year ||'':'',
            institutionSchool: formData.tenth?formData.tenth.institutionSchool ||'':'',
            gradePercentage: formData.tenth?formData.tenth.gradePercentage ||'':'',
            division:formData.tenth? formData.tenth.division ||'First':'First',
            majorSubjects:formData.tenth? formData.tenth.majorSubjects ||'':'',
            uploadMarksheet: formData.tenth?formData.tenth.uploadMarksheet||null:null,
            uploadCertificate: formData.tenth?formData.tenth.uploadCertificate||null:null
        },
        twelfth: {
            nameOfExamination: formData.twelfth?formData.twelfth.nameOfExamination ||'':'',
            universityBoard:  formData.twelfth?formData.twelfth.universityBoard ||'':'',
            year:  formData.twelfth?formData.twelfth.year ||'':'',
            institutionSchool:  formData.twelfth?formData.twelfth.institutionSchool ||'':'',
            gradePercentage:  formData.twelfth?formData.twelfth.gradePercentage ||'':'',
            division: formData.twelfth? formData.twelfth.division ||'First':'First',
            majorSubjects:  formData.twelfth?formData.twelfth.majorSubjects ||'':'',
            migrationCertificateNo: formData.twelfth?formData.twelfth.migrationCertificateNo||'':'',
            uploadMarksheet: formData.twelfth?formData.twelfth.uploadMarksheet|| null:null,
            uploadCertificate: formData.twelfth?formData.twelfth.uploadCertificate|| null:null
        }
    });

    const handleChange = (event, field, subField = '') => {
        let value;
        if (event.target.files) {
            value = event.target.files[0];
        } else if (subField) {
            value = event.target[subField];
        } else {
            value = event.target.value;
        }

        setFormData({
            ...form,
            [field]: {
                ...form[field],
                [subField || event.target.name]: value
            }
        });
    };

    const validateForm = () => {
        console.log(form.tenth)
        for (let key in form.tenth) {
            if (form.tenth[key] === '') {
                alert(`Please fill ${key} field`);
                return false;
            }
        }
        for (let key in form.twelfth) {
            if (form.twelfth[key] === '') {
                alert(`Please fill ${key} field`);
                return false;
            }
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

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Education Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">10th</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Name of Examination"
                    name="nameOfExamination"
                    value={form.tenth.nameOfExamination}
                    onChange={(e) => handleChange(e, 'tenth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="University/Board"
                    name="universityBoard"
                    value={form.tenth.universityBoard}
                    onChange={(e) => handleChange(e, 'tenth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Year"
                    name="year"
                    value={form.tenth.year}
                    onChange={(e) => handleChange(e, 'tenth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Insitution/School"
                    name="institutionSchool"
                    value={form.tenth.institutionSchool}
                    onChange={(e) => handleChange(e, 'tenth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Grade/Percentage"
                    name="gradePercentage"
                    value={form.tenth.gradePercentage}
                    onChange={(e) => handleChange(e, 'tenth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Division"
                    name="division"
                    value={form.tenth.division}
                    select
                    SelectProps={{ native: true }}
                    onChange={(e) => handleChange(e, 'tenth')}
                >
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                    <option value="Na">Na</option>
                </TextField>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Major Subjects"
                    name="majorSubjects"
                    value={form.tenth.majorSubjects}
                    onChange={(e) => handleChange(e, 'tenth')}
                />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Upload Marksheet"
                    type="file"
                    name="uploadMarksheet"
                    onChange={(e) => handleChange(e, 'tenth', 'uploadMarksheet')}
                />
                <Grid item xs={3}>
             {form.tenth.uploadMarksheet && (
               <div style={{ border: '1px solid #000', width: '300px', height: '270px', overflow: 'auto' }}>
            <Document file={form.tenth.uploadMarksheet}>
                <Page pageNumber={1} width={300} />
            </Document>
             </div>
               )}
        </Grid>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Upload Certificate"
                    type="file"
                    name="uploadCertificate"
                    onChange={(e) => handleChange(e, 'tenth', 'uploadCertificate')}
                />
                 <Grid item xs={3}>
             {form.tenth.uploadCertificate && (
               <div style={{ border: '1px solid #000', width: '300px', height: '270px', overflow: 'auto' }}>
            <Document file={form.tenth.uploadCertificate}>
                <Page pageNumber={1} width={300} />
            </Document>
             </div>
               )}
        </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">12th</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Name of Examination"
                    name="nameOfExamination"
                    value={form.twelfth.nameOfExamination}
                    onChange={(e) => handleChange(e, 'twelfth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="University/Board"
                    name="universityBoard"
                    value={form.twelfth.universityBoard}
                    onChange={(e) => handleChange(e, 'twelfth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Year"
                    name="year"
                    value={form.twelfth.year}
                    onChange={(e) => handleChange(e, 'twelfth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Insitution/School"
                    name="institutionSchool"
                    value={form.twelfth.institutionSchool}
                    onChange={(e) => handleChange(e, 'twelfth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Grade/Percentage"
                    name="gradePercentage"
                    value={form.twelfth.gradePercentage}
                    onChange={(e) => handleChange(e, 'twelfth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Division"
                    name="division"
                    value={form.twelfth.division}
                    select
                    SelectProps={{ native: true }}
                    onChange={(e) => handleChange(e, 'twelfth')}
                >
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                    <option value="Na">Na</option>
                </TextField>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Major Subjects"
                    name="majorSubjects"
                    value={form.twelfth.majorSubjects}
                    onChange={(e) => handleChange(e, 'twelfth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    fullWidth
                    label="Migration Certificate No"
                    name="migrationCertificateNo"
                    value={form.twelfth.migrationCertificateNo}
                    onChange={(e) => handleChange(e, 'twelfth')}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Upload Marksheet"
                    name="uploadMarksheet"
                    type="file"
                    onChange={(e) => handleChange(e, 'twelfth', 'uploadMarksheet')}
                />
                <Grid item xs={3}>
             {form.twelfth.uploadMarksheet && (
               <div style={{ border: '1px solid #000', width: '300px', height: '270px', overflow: 'auto' }}>
            <Document file={form.twelfth.uploadMarksheet}>
                <Page pageNumber={1} width={300} />
            </Document>
             </div>
               )}
        </Grid>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    fullWidth
                    label="Upload Certificate"
                    type="file"
                    name="uploadCertificate"
                    onChange={(e) => handleChange(e, 'twelfth', 'uploadCertificate')}
                />
                 <Grid item xs={3}>
             {form.twelfth.uploadCertificate && (
               <div style={{ border: '1px solid #000', width: '300px', height: '270px', overflow: 'auto' }}>
            <Document file={form.twelfth.uploadCertificate}>
                <Page pageNumber={1} width={300} />
            </Document>
             </div>
               )}
        </Grid>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={PrevPage} style={{ float: 'left' }}>Previous</Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={NextPage}>Next</Button>
            </Grid>
        </Grid>
    );
}

export default EducationDetailsForm;