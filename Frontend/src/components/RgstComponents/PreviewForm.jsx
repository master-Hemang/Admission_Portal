import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Page1 from '../AllDetailsComponents/Page1';
import Page2 from '../AllDetailsComponents/Page2';
import Page3 from '../AllDetailsComponents/Page3';
import Page4 from '../AllDetailsComponents/Page4';
import Page5 from '../AllDetailsComponents/Page5';
import Page6 from '../AllDetailsComponents/Page6';
import Page7 from '../AllDetailsComponents/Page7';
import Page8 from '../AllDetailsComponents/Page8';

const PreviewForm = ({ handlePrev ,setCurrentStep}) => {

    const PrevPage = () => {
        handlePrev();
    };

    const formSubmit = () => {
        alert("Form Submitted");
    };

    const pages = [Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Preview</Typography>
            </Grid>
            {pages.map((Page, index) => (
                <Grid item xs={12} key={index}>
                    <Page setCurrentStep={setCurrentStep}/>
                </Grid>
            ))}
            <Grid item xs={6}>
                <Typography variant="body1">
                    <Button variant="contained" onClick={PrevPage} style={{ float: 'left' }}>
                        Previous
                    </Button>
                </Typography>
                
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    <Button variant="contained" onClick={formSubmit} style={{ float: 'right' }}>
                        Submit
                    </Button>
                </Typography>
                
            </Grid>
        </Grid>
    );
};

export default PreviewForm;
