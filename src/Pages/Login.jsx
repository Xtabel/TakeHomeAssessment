import { Box, Button, CircularProgress, FormControl, Grid, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import loginbg from "../Assets/login-bg.jfif"
import login from "../Assets/Logo.svg";
import { useDataLayerValue } from '../@app/ContextApi/DataLayer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [{ }, dispatch] = useDataLayerValue();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
        setError(false)
    };
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, [4000])
            navigate("/")
        }
    }, [loading, navigate])
    const handleSubmit = () => {
        if (formValues.username !== "" && formValues.email !== "" && formValues.password !== "") {
            setError(false)
            const { password, ...otherFormValues } = formValues;
            dispatch({
                type: "LOGIN",
                userLoggedIn: otherFormValues,
            })
            setLoading(true)

        } else {
            setError(true)
        }
    }
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box sx={{ height: '100vh', display: 'flex', }}>
            {!isMobile ?
                <Box p={!isMobile ? 3 : 0} sx={{ backgroundImage: `url(${loginbg})`, height: '100%', flex: { xs: '1', lg: '0.5', md: '1' }, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <img src={login} alt="Login" style={{ height: '30px' }} />

                </Box> : ""}
            <Stack sx={{ height: '100%', flex: { xs: '1', lg: '0.5', md: '1' }, justifyContent: 'center', alignItems: 'center', gap: 3, p: !isMobile ? 10 : 0 }}>
                <Typography fontWeight={700} variant='h5'>Login</Typography>
                {error ? <p fontWeight={700} variant='body1' style={{ fontSize: '10px', color: 'red' }}>Kindly fill all fields</p> :
                    <p fontWeight={700} variant='body1' style={{ fontSize: '10px' }}>Note: <i>Test with any data</i></p>}
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    p={3}
                    onSubmit={handleSubmit}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <TextField
                                    name="username"
                                    required
                                    id="outlined-required"
                                    label="Username"
                                    onChange={(e) => handleChange(e)}
                                    value={formValues.username}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>

                                <TextField
                                    name="email"
                                    required
                                    type='email'
                                    id="outlined-required"
                                    label="Email Address"
                                    onChange={(e) => handleChange(e)}
                                    value={formValues.email}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl fullWidth>
                                <TextField
                                    name="password"
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    onChange={(e) => handleChange(e)}
                                    value={formValues.password}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs md={12}>
                            <FormControl fullWidth>
                                <Button onClick={handleSubmit} disableElevation color='primary' variant='contained' sx={{ p: 2 }}>
                                    {loading ? <CircularProgress sx={{ color: 'white' }} /> : "  Login"}
                                </Button>
                            </FormControl>
                        </Grid>
                    </Grid>


                </Box>


            </Stack>
        </Box>
    )
}

export default Login