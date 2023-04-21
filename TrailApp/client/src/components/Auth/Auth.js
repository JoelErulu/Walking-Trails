import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, Icon } from '@material-ui/core';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import icon from './icon.js';
import useStyles from './styles.js';
import Input from './Input.js';
import { signin, signup } from '../../actions/auth.js';
import { googleLogin } from '../../api/index.js';



const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const[role, setRole] = useState('guest');
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [ isSignup, setIsSignup ] = useState(false);
    const [ formData, setFormData ] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup) {
            dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    //Find a way to assign a role to the user that just signed in
    //Currently,
    //
    const googleSuccess = async (res) => {
        const result = jwt_decode(res?.credential);
        const token = res?.credential;
        try {
            dispatch({type: 'AUTH', data: {result, token}});

            const{data} = await googleLogin(res?.credential);
            if(data.result.role ==="admin"){
                navigate('/admin');
            }else{
                navigate('/home');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const googleFailure = (err) => {
        console.log(err);
        console.log('Google Sign In was unsuccessful. Try Again Later');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                        <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            { isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>

                    <GoogleLogin render={(renderProps) => (<Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<icon />} variant="contained">
                            Google Sign In
                        </Button>
                        ) }
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justifyContent='flex-start'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;