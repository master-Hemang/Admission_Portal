import React, { useState } from 'react';
import { Grid, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';

const TermsandConditions = ({ handleNext }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleNextPage = () => {
        if (checked) {
            handleNext();
        } else {
            alert('Please accept the terms and conditions.');
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Terms and Conditions Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                    label="I accept the terms and conditions"
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={handleNextPage}>Next</Button>
            </Grid>
        </Grid>
    );
};

export default TermsandConditions;
