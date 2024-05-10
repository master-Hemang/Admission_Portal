import React from 'react';
import { Button } from '@mui/material';

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard | JEE</h2>
      <ul>
        <li><Button><a href = "https://lrb.iitism.ac.in/api/storage/Guidelines_Online%20Process_2023.pdf" target="_blank" rel="noopener noreferrer">Guidelines</a></Button></li>
        <li><Button><a href = "https://lrb.iitism.ac.in/api/storage/FAQ_Online%20Process_2023.pdf" target="_blank" rel="noopener noreferrer">Frequently Asked Questions(FAQ)</a></Button></li>
        <li><Button><a href = "https://lrb.iitism.ac.in/api/storage/Guidelines_Online%20Process_2023.pdf" target="_blank" rel="noopener noreferrer">SBI Transaction Tracking</a></Button></li>
        <li><Button>Payment Complaint</Button></li>
        <li><Button>Track Your Complaint</Button></li>
      </ul>
    </div>
  );
};

export default DashboardPage;
