import React from 'react';
import { Grid, Typography, Button, TableCell, Table, TableBody, TableContainer, TableRow, Paper } from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const Page4 = ({setCurrentStep}) => {
    const { formData } = useFormContext();
    
    const fields = [
        { name: 'fatherName', label: "Father's Name" },
        { name: 'motherName', label: "Mother's Name" },
        { name: 'fatherOccupation', label: "Father's Occupation" },
        { name: 'motherOccupation', label: "Mother's Occupation" },
        { name: 'fatherIncome', label: "Father's Income" },
        { name: 'motherIncome', label: "Mother's Income" },
        { name: 'parentMobile', label: "Parent's Mobile Number" },
        { name: 'parentEmail', label: "Parent's Email Id" },
        { name: 'guardianName', label: "Guardian's Name" },
        { name: 'guardianOccupation', label: "Guardian's Occupation" },
        { name: 'alternateMobile', label: "Alternate Mobile Number" },
        { name: 'alternateEmail', label: "Alternate Email Id" },
        { name: 'parentbankName', label: "Bank Name (of parent)" },
        { name: 'parentaccountNumber', label: "Account Number (of parent)" },
        { name: 'parentconfirmAccountNumber', label: "Confirm Account No (of parent)" },
        { name: 'parentifscCode', label: "IFSC Code (of parent)" },
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Parent Details</Typography>
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
                <Button variant="contained" onClick={()=>{setCurrentStep(4)}}>Edit</Button>
            </Grid>
        </Grid>
    );
};

export default Page4;
