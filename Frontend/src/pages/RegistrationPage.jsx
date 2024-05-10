import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import CCAForm from '../components/RgstComponents/CCAForm';
import PersonalDetailsForm from '../components/RgstComponents/PersonalDetailsForm';
import OtherDetailsForm from '../components/RgstComponents/OtherDetailsForm';
import ParentDetailsForm from '../components/RgstComponents/ParentDetailsForm';
import EducationDetailsForm from '../components/RgstComponents/EducationDetailsForm';
import HostelDetailsForm from '../components/RgstComponents/HostelDetailsForm';
import IITISMEmailForm from '../components/RgstComponents/IITISMEmailForm';
import FeeDetailsForm from '../components/RgstComponents/FeeDetailsForm';
import PreviewForm from '../components/RgstComponents/PreviewForm';

const steps = [
  'CCA',
  'Personal Details',
  'Other Details',
  'Parent Details',
  'Education Details',
  'Hostel Details',
  'IIT(ISM) Email',
  'Fee Details',
  'Preview'
];

const RegistrationForm = () => {
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
        return <CCAForm handleNext={handleNext} />;
      case 2:
        return <PersonalDetailsForm handleNext={handleNext} handlePrev={handlePrev} />;
      case 3:
        return <OtherDetailsForm handleNext={handleNext} handlePrev={handlePrev} />;
      case 4:
        return <ParentDetailsForm handleNext={handleNext} handlePrev={handlePrev} />;
      case 5:
        return <EducationDetailsForm handleNext={handleNext} handlePrev={handlePrev} />;
      case 6:
        return <HostelDetailsForm handleNext={handleNext} handlePrev={handlePrev} />;
      case 7:
        return <IITISMEmailForm handleNext={handleNext} handlePrev={handlePrev} />;
      case 8:
        return <FeeDetailsForm handleNext={handleNext} handlePrev={handlePrev} />;
      case 9:
        return <PreviewForm handlePrev={handlePrev} setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
      <Grid item xs={12} sm={10}>
        <Paper elevation={3} style={{ padding: '20px', position: 'relative' }}>
          <h2>Registration</h2>
          <div>
            <ol style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
              {steps.map((step, index) => (
                <li
                  key={index}
                  style={{
                    marginRight: '20px',
                    background: index + 1 === currentStep ? '#f2e6ff' : 'transparent',
                    padding: '10px',
                    border: '1px solid #ddd'
                  }}
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div style={{ zIndex: '1', position: 'relative' }}>
            {renderForm()}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
