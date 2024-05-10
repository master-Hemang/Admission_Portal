import React, { useState } from 'react';
import { Grid, Paper} from '@mui/material';
import TermsandConditions from '../components/AdmFeeComponents/TermsandConditions';
import FeeDetails from '../components/AdmFeeComponents/FeeDetails';
const AdmissionPageForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
     
    const renderForm = () => {
        switch (currentStep) {
            case 1:
                return <TermsandConditions  handleNext={handleNext}/>;
            case 2:
                return <FeeDetails handleNext={handleNext} handlePrev={handlePrev} />;
            default:
                return null;
        }
    };

    return (
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={10}>
                <Paper elevation={3} style={{ padding: '20px', position: 'relative' }}>
                    <h2>AdmissionFee</h2>
                    <div style={{ zIndex: '1', position: 'relative' }}>
                        {renderForm()}
                    </div>
                    
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AdmissionPageForm;
