import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTopbar } from '../context/TopbarContext';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  const { items } = useTopbar();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const LogoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      <AppBar position="static" style={{ boxShadow: 'rgba(58, 53, 65, 0.42) 0px 4px 8px -4px', backgroundImage: 'linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            IIT(ISM)
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account of current user"
            aria-haspopup="true"
            aria-controls="menu-appbar"
            onClick={handleMenuOpen}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>
              Username
            </MenuItem>
            <MenuItem onClick={LogoutHandler}>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" style={{ height: '30px', boxShadow: '0px 4px 8px -4px rgba(58, 53, 65, 0.42)', zIndex: 1  }}>
        {items.map((item, index) => (
          <Typography key={index} variant="body2" style={{ marginRight: '20px' }}>
            <NavLink to={item.path} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              {item.icon}
              <span style={{ marginLeft: '5px' }}>{item.label}</span> 
            </NavLink>
          </Typography>
        ))}
      </Toolbar>
    </>
  );
};

export default Topbar;
