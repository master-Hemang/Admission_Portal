import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useFormContext } from '../../context/FormContext';

const Page1 = ({setCurrentStep}) => {
    const { formData } = useFormContext();

    

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">CCA Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ borderBottom: '1px solid #000', paddingRight: '8px', fontWeight: 'bold' }}>CCA:</TableCell>
                                <TableCell style={{ borderBottom: '1px solid #000', borderRight: '1px solid #000' }}>{formData.cca}</TableCell>
                                <TableCell style={{ borderBottom: '1px solid #000', paddingRight: '8px', fontWeight: 'bold' }}>ECA/Sports:</TableCell>
                                <TableCell style={{ borderBottom: '1px solid #000', borderRight: '1px solid #000' }}>{formData.ECAsports}</TableCell>
                                <TableCell style={{ borderBottom: '1px solid #000', paddingRight: '8px', fontWeight: 'bold' }}>Major Game:</TableCell>
                                <TableCell style={{ borderBottom: '1px solid #000', borderRight: '1px solid #000' }}>{formData.majorGame}</TableCell>
                                <TableCell style={{ borderBottom: '1px solid #000', paddingRight: '8px', fontWeight: 'bold' }}>Minor Game:</TableCell>
                                <TableCell style={{ borderBottom: '1px solid #000' }}>{formData.minorGame}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={()=>{setCurrentStep(1)}}>
                    Edit
                </Button>
            </Grid>
        </Grid>
    );
};

export default Page1;
