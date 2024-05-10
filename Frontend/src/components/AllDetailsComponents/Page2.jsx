import React from 'react';
import { Grid, Typography, Button, TableCell, Table, TableBody, TableContainer, TableRow, Paper } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import { useFormContext } from '../../context/FormContext';

const Page2 = ({setCurrentStep}) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const { formData } = useFormContext();

    const fields = [
        { label: 'JEE Main Application:', value: formData.jeeMainApplication },
        { label: 'Institute Name:', value: formData.instituteName },
        { label: 'First Name:', value: formData.firstName },
        { label: 'Middle Name:', value: formData.middleName },
        { label: 'Last Name:', value: formData.lastName },
        { label: 'Email:', value: formData.email },
        { label: 'Contact Number:', value: formData.contactNo },
        { label: 'Category:', value: formData.category },
        { label: 'Alloted Category:', value: formData.allotedCategory },
        { label: 'Date of Birth:', value: formData.dob },
        { label: 'Gender:', value: formData.gender },
        { label: 'Preparatory:', value: formData.preparatory },
        { label: 'Divyang:', value: formData.divyang },
        { label: 'Aadhaar Number:', value: formData.adhaarNo },
        { label: 'Country:', value: formData.country },
        { label: 'State:', value: formData.state },
        { label: 'City:', value: formData.city },
        { label: 'Pin Code:', value: formData.pincode },
        { label: 'Permanent Address 1:', value: formData.pa1 },
        { label: 'Permanent Address 2:', value: formData.pa2 },
        { label: 'Blood Group:', value: formData.bloodgroup },
        { label: 'Nationality:', value: formData.nationality },
        { label: 'Religion:', value: formData.religion },
        { label: 'Birth Place:', value: formData.birthPlace },
    ];

    const rows = [];
    for (let i = 0; i < fields.length; i += 4) {
        rows.push(fields.slice(i, i + 4));
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Personal Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {rows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {row.map((field, colIndex) => (
                                        <React.Fragment key={colIndex}>
                                            <TableCell style={{ borderBottom: '1px solid #000', paddingRight: '8px', fontWeight: 'bold' }}>{field.label}</TableCell>
                                            <TableCell style={{ borderBottom: '1px solid #000', borderRight:  '1px solid #000', paddingRight: '8px' }}>{field.value}</TableCell>
                                        </React.Fragment>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle1">Photo:</Typography>
                <Grid item xs={12}>
                    {formData.photo && (
                        <div style={{ border: '1px solid #000', width: '100%', maxWidth: '300px', height: '270px', overflow: 'auto' }}>
                            <Document file={formData.photo}>
                                <Page pageNumber={1}  />
                            </Document>
                        </div>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={3} >
                <Typography variant="subtitle1">Signature:</Typography>
                <Grid item xs={12}>
                    {formData.sign && (
                        <div style={{ border: '1px solid #000', width: '100%', maxWidth: '300px', height: '270px', overflow: 'auto' }}>
                            <Document file={formData.sign}>
                                <Page pageNumber={1} />
                            </Document>
                        </div>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={()=>{setCurrentStep(2)}}>Edit</Button>
            </Grid>
        </Grid>
    );
};

export default Page2;
