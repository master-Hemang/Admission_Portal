import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import data from './data';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [AppliNo, setAppliNo] = useState('');
    const [MobNo, setMobNo] = useState('');
    const [Email, setEmail] = useState('');
    const [touched, setTouched] = useState({ AppliNo: false, MobNo: false, Email: false });
    const navigate = useNavigate();

    localStorage.setItem('user', '');
    localStorage.setItem('token', '');

    const LoginHandler = (e) => {
        e.preventDefault();
        setTouched({ AppliNo: true, MobNo: true, Email: true });
        console.log(AppliNo, MobNo, Email);
        if (AppliNo && MobNo && Email) {
            const user = data.find(u => u.appliNo === AppliNo && u.mobNo === MobNo && u.email === Email);
            if (user) {
                console.log('Login successful:', user);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', user.token);
                navigate('/dashboard');
            } else {
                console.log('Invalid credentials');
            }
        }
    }

    return (
        <Grid>
            <Grid container style={{ height: '100vh' }}>
                <Grid item xs={8}  style={{ backgroundColor: 'rgb(221 233 246)'}}>
                    <Grid container spacing={2} alignItems="flex-start" justifyContent="flex-start">
                        <Grid item xs={12} style={{ padding: '20px' }}>
                            <Typography variant="h5" style={{ color: 'blue' }}>
                                M
                            </Typography>
                            <Typography variant="h5">
                                IIT(ISM)
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <img src='https://jeea.iitism.ac.in/images/pages/auth-v2-login-illustration-light.png' alt="Illustration" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '80%' }}>
                        <Typography variant="h4" align="center" gutterBottom>
                        NEW ADMISSION (JEE) - IIT(ISM) 
                        </Typography>
                        <form onSubmit={LoginHandler}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        error={touched.AppliNo && !AppliNo}
                                        helperText={touched.AppliNo && !AppliNo ? "AppliNo is required" : ""}
                                        fullWidth
                                        label="JEE Application No"
                                        variant="outlined"
                                        onChange={(e) => { 
                                            setAppliNo(e.target.value); 
                                            setTouched(prevState => ({ ...prevState, AppliNo: true })); 
                                        }}
                                        onBlur={() => setTouched(prevState => ({ ...prevState, AppliNo: true }))}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={touched.MobNo && !MobNo}
                                        helperText={touched.MobNo && !MobNo ? "MobNo is required" : ""}
                                        fullWidth
                                        label="Registration Mob No"
                                        variant="outlined"
                                        onChange={(e) => { 
                                            setMobNo(e.target.value); 
                                            setTouched(prevState => ({ ...prevState, MobNo: true })); 
                                        }}
                                        onBlur={() => setTouched(prevState => ({ ...prevState, MobNo: true }))}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={touched.Email && !Email}
                                        helperText={touched.Email && !Email ? "Email is required" : ""}
                                        fullWidth
                                        label="Registration Email No"
                                        variant="outlined"
                                        onChange={(e) => { 
                                            setEmail(e.target.value); 
                                            setTouched(prevState => ({ ...prevState, Email: true })); 
                                        }}
                                        onBlur={() => setTouched(prevState => ({ ...prevState,Email: true }))}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ bgcolor: 'rgb(145, 85, 253)' }} 
                                        fullWidth>
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
