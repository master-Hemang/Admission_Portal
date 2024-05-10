import React from 'react';
import { Grid, Typography, TableCell, Table, TableBody, TableRow,Button } from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const Page6 = ({setCurrentStep}) => {
    const { formData } = useFormContext();

    // Define fields for hostel details
    const fields = [
        { name: 'foodHabbit', label: 'Food Habit' },
        { name: 'details', label: 'If Having Laptop(give details)' },
        { name: 'modelNo', label: 'Model No' },
        { name: 'serialNo', label: 'Serial No' },
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Hostel Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <Table>
                    <TableBody>
                        <TableRow>
                            {fields.map((field, index) => (
                                <React.Fragment key={index}>
                                    <TableCell style={{ fontWeight: 'bold' }}>{field.label}:</TableCell>
                                    <TableCell>{formData[field.name]}</TableCell>
                                    {index !== fields.length - 1 && <TableCell style={{ borderRight: '1px solid #000' }}></TableCell>}
                                </React.Fragment>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={()=>{setCurrentStep(6)}}>
                    Edit
                </Button>
            </Grid>
        </Grid>
    );
};

export default Page6;
