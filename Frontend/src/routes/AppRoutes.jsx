import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardRoutes from './DashboardRoutes';
import Topbar from '../components/Topbar';

const AppRoutes = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return (
        <>
            {!isLoginPage && <Topbar />}
            <Routes>
                <Route path='/' element={<Navigate to='/login' />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/dashboard/*' element={<DashboardRoutes />} />
            </Routes>
        </>
    );
}

export default AppRoutes;
