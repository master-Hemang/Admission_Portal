import React from 'react';
import { Grid, Typography, TableCell, Table, TableBody, TableRow ,Button} from '@mui/material';
import { useFormContext } from '../../context/FormContext';

const Page8 = ({setCurrentStep}) => {
    const { formData } = useFormContext();

    // Define fields for fee details
    const fields = [
        { name: 'feeAmount', label: 'Fee Amount' },
        { name: 'feeDate', label: 'Fee Date' },
        { name: 'feeMode', label: 'Fee Mode' },
        { name: 'transactionId', label: 'Transaction ID' },
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Fee Details</Typography>
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
                <Button variant="contained" onClick={()=>{setCurrentStep(8)}}>
                    Edit
                </Button>
            </Grid>
        </Grid>
    );
};

export default Page8;
