import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Dashboard from '../pages/DashboardPage';
import AdmissionFee from '../pages/AdmissionFeePage';
import SportsSelection from '../pages/SportsSelectionPage';
import Registration from '../pages/RegistrationPage';
import Download from '../pages/DownloadPage';

const DashboardRoutes = () => {
 return(
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/admmisssion_fee' element={<AdmissionFee/>}/>
            <Route path='/sports_selection' element={<SportsSelection/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/download' element={<Download/>}/>
        </Routes>
 )

}

export default DashboardRoutes;