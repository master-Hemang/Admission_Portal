import React from 'react';
import { Grid, Typography, TableCell, Table, TableBody, TableRow,Button } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import { useFormContext } from '../../context/FormContext';

const Page5 = ({setCurrentStep}) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const { formData } = useFormContext();

    // Define fields for tenth education details
    const tenthFields = [
        { name: 'nameOfExamination', label: 'Name of Examination' },
        { name: 'universityBoard', label: 'University/Board' },
        { name: 'year', label: 'Year' },
        { name: 'institutionSchool', label: 'Institution/School' },
        { name: 'gradePercentage', label: 'Grade/Percentage' },
        { name: 'division', label: 'Division' },
        { name: 'majorSubjects', label: 'Major Subjects' },
    ];


    const twelfthFields = [
        { name: 'nameOfExamination', label: 'Name of Examination' },
        { name: 'universityBoard', label: 'University/Board' },
        { name: 'year', label: 'Year' },
        { name: 'institutionSchool', label: 'Institution/School' },
        { name: 'gradePercentage', label: 'Grade/Percentage' },
        { name: 'division', label: 'Division' },
        { name: 'majorSubjects', label: 'Major Subjects' },
        { name: 'migrationCertificateNo', label: 'Migration Certificate No' },
    ];

    // Function to chunk the array into groups of size n
    const chunkArray = (array, n) => {
        return Array.from({ length: Math.ceil(array.length / n) }, (_, index) =>
            array.slice(index * n, (index + 1) * n)
        );
    };

    // Function to render table rows
    const renderTableRow = (fields) => {
        return fields.map((field, index) => (
            <React.Fragment key={index}>
                <TableCell style={{ borderBottom: '1px solid #000', paddingRight: '8px', fontWeight: 'bold' }}>
                    {field.label}:
                </TableCell>
                <TableCell style={{ borderBottom: '1px solid #000' }}>
                    {formData[field.name]}
                </TableCell>
                {index !== fields.length - 1 && ( // Add right border after the field value
                    <TableCell style={{ borderBottom: '1px solid #000', borderRight: '1px solid #000' }}></TableCell>
                )}
            </React.Fragment>
        ));
    };

    // Render table rows with four columns in each row
    const renderTableRows = (fields) => {
        const chunks = chunkArray(fields, 4);
        return chunks.map((chunk, index) => (
            <TableRow key={index}>
                {renderTableRow(chunk)}
            </TableRow>
        ));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Education Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Tenth</Typography>
                <Table>
                    <TableBody>
                        {renderTableRows(tenthFields)}
                        <TableRow>
                            <TableCell colSpan={4}>
                                <Typography>{`Upload Marksheet: ${formData.tenth.uploadMarksheet ? formData.tenth.uploadMarksheet.name : ''}`}</Typography>
                                {formData.tenth.uploadMarksheet && (
                                    <div style={{ border: '1px solid #000', width: '300px', height: '270px', overflow: 'auto' }}>
                                        <Document file={formData.tenth.uploadMarksheet}>
                                            <Page pageNumber={1}  />
                                        </Document>
                                    </div>
                                )}
                            </TableCell>
                            <TableCell colSpan={4}>
                                <Typography>{`Upload Certificate: ${formData.tenth.uploadCertificate ? formData.tenth.uploadCertificate.name : ''}`}</Typography>
                                {formData.tenth.uploadCertificate && (
                                    <div style={{ border: '1px solid #000', width: '300px', height: '270px', overflow: 'auto' }}>
                                        <Document file={formData.tenth.uploadCertificate}>
                                            <Page pageNumber={1}  />
                                        </Document>
                                    </div>
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Twelfth</Typography>
                <Table>
                    <TableBody>
                        {renderTableRows(twelfthFields)}
                        <TableRow>
                            <TableCell colSpan={4}>
                                <Typography>{`Upload Marksheet: ${formData.twelfth.uploadMarksheet ? formData.twelfth.uploadMarksheet.name : ''}`}</Typography>
                                {formData.twelfth.uploadMarksheet && (
                                    <div style={{ border: '1px solid #000', width: '300px', height: '270px', overflow: 'auto' }}>
                                        <Document file={formData.twelfth.uploadMarksheet}>
                                            <Page pageNumber={1}  />
                                        </Document>
                                    </div>
                                )}
                            </TableCell>
                            <TableCell colSpan={4}>
                                <Typography>{`Upload Certificate: ${formData.twelfth.uploadCertificate ? formData.twelfth.uploadCertificate.name : ''}`}</Typography>
                                {formData.twelfth.uploadCertificate && (
                                    <div style={{ border: '1px solid #000', width: '300px', height: '270px', overflow: 'auto' }}>
                                        <Document file={formData.twelfth.uploadCertificate}>
                                            <Page pageNumber={1}  />
                                        </Document>
                                    </div>
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={()=>{setCurrentStep(5)}}>
                    Edit
                </Button>
            </Grid>
        </Grid>
    );
};

export default Page5;
