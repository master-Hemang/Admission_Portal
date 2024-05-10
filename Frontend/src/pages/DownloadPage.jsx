import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const DownloadPage = () => {
    const [fileData, setFileData] = useState(null);

    const handleClick = async (file) => {
        try {
            const response = await axios.get(`http://localhost:5000/download/${file}`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            const data = response.data;
            setFileData(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDownload = () => {
        const fileUrl = fileData.fileUrl;
        window.open(fileUrl, '_blank');
    };

    return (
        <div>
            <h2>Download Page</h2>
            {fileData && (
                <div>
                    <pre>{JSON.stringify(fileData, null, 2)}</pre>
                    <Button onClick={handleDownload}>Download</Button>
                </div>
            )}
            <ul>
           <li> <Button onClick={() => handleClick('mis_registration_slip')}>MIS Registration Slip</Button></li>
           <li> <Button onClick={() => handleClick('payment_receipt')}>Payment Receipt</Button></li>
            </ul>
        </div>
    );
};

export default DownloadPage;

