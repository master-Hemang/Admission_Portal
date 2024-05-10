import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadIcon from '@mui/icons-material/Download'; // Add this line for the Download icon


export const TopbarContext = createContext();
export const useTopbar = () => useContext(TopbarContext);
const TopbarProvider = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const TopbarItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: <HomeIcon />,
      active: pathname === '/dashboard',
      show: true,
    },
    {
      label: 'Admission Fee',
      path: '/dashboard/admmisssion_fee',
      icon: <AddCircleOutlineIcon />,
      active: pathname === '/dashboard/admmisssion_fee',
      show: true,
    },
    {
      label: 'Sports Selection',
      path: '/dashboard/sports_selection',
      icon: <SportsSoccerIcon />,
      active: pathname === '/dashboard/sports_selection',
      show: true,
    },
    {
      label: 'Registration',
      path: '/dashboard/registration',
      icon: <AccountCircleIcon />,
      active: pathname === '/dashboard/registration',
      show: true,
    },
    {
      label: 'Download',
      path: '/dashboard/download',
      icon: <DownloadIcon />, 
      active: pathname === 'dashboard/download',
      show: true,
    },
  ];

  return (
    <TopbarContext.Provider value={{ items: TopbarItems }}>
      {children}
    </TopbarContext.Provider>
  );
};

export default TopbarProvider;
