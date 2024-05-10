import React from 'react';
import { Grid, Typography, Button, TableCell, Table, TableBody, TableContainer, TableRow, Paper } from '@mui/material';
import { pdfjs } from 'react-pdf';
import { useFormContext } from '../../context/FormContext';

const Page3 = ({setCurrentStep}) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const { formData } = useFormContext();

    const fields = [
        { name: 'nameInHindi', label: 'Name in Hindi' },
        { name: 'maritialStatus', label: 'Marital Status' },
        { name: 'kashmiriImmigrant', label: 'Kashmiri Immigrant' },
        { name: 'identificationMark', label: 'Identification Mark' },
        { name: 'extraCircurricularActivity', label: 'Extra Curricular Activity' },
        { name: 'otherRelevantInfo', label: 'Other Relevant Info' },
        { name: 'favoritePastTime', label: 'Favorite Past Time' },
        { name: 'hobbies', label: 'Hobbies' },
        { name: 'jeeAdvance', label: 'JEE Advance' },
        { name: 'courseCode', label: 'Course Code' },
        { name: 'course', label: 'Course' },
        { name: 'branch', label: 'Branch' },
        { name: 'jeeAdvanceRank', label: 'JEE Advance Rank' },
        { name: 'jeeAdvanceCategoryRank', label: 'JEE Advance Category Rank' },
        { name: 'bankName', label: 'Bank Name' },
        { name: 'accountNumber', label: 'Account Number' },
        { name: 'confirmAccountNumber', label: 'Confirm Account No' },
        { name: 'ifscCode', label: 'IFSC Code' },
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Other Form Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {fields.map((field, index) => (
                                index % 4 === 0 && (
                                    <TableRow key={index}>
                                        {fields.slice(index, index + 4).map((item, idx) => (
                                            <React.Fragment key={idx}>
                                                <TableCell style={{ borderBottom: '1px solid #000', paddingRight: '8px', fontWeight: 'bold' }}>
                                                    {item.label}:
                                                </TableCell>
                                                <TableCell style={{ borderBottom: '1px solid #000' }}>
                                                    {formData[item.name]}
                                                </TableCell>
                                                {idx !== 3 && ( // Add right border after the field value
                                                    <TableCell style={{ borderBottom: '1px solid #000', borderRight: '1px solid #000' }}></TableCell>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </TableRow>
                                )
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={()=>{setCurrentStep(3)}}>Edit</Button>
            </Grid>
        </Grid>
    );
};

export default Page3;
