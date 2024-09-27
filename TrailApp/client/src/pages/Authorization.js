// Import React components
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Import jwt_decode from 'jwt-decode';
import { googleLogin } from '../api/index';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

// Import components & actions
import Input from '../components/Authorization/input';
import { signin, signup } from '../actions/auth';

// Import global stylesheet
import '../interfaceSettings.css';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

// README: THIS WILL BE THE NEW SIGN-IN/REGISTRATION PAGE.'
// TODO: Fix ALL the logic & HTML/JSX
// TODO: Style this PLEASE
const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Optional: Clean up on component unmount
        return () => googleLogout();
    }, []);

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        isSignup ? dispatch(signup(formData, navigate)) : dispatch(signin(formData, navigate));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const switchMode = () => {
        setIsSignup((prev) => !prev);
        setShowPassword(false);
    };

    /*
    const googleSuccess = async (res) => {
        const result = jwt_decode(res?.credential);
        const token = res?.credential;

        try {
            const { data } = await googleLogin(token);
            dispatch({ type: 'AUTH', data: { result, token } });
            navigate(data.result.role === "admin" ? '/admin' : '/home');
        } catch (error) {
            console.error(error);
        }
    };
    */

    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (tokenResponse) => {
            try {
                const response = await googleLogin({ token: tokenResponse.code });
                dispatch({ type: 'AUTH', data: { payload: response.data.result, token: response.data.jwtToken } });
                navigate(response.data.result.role === "admin" ? '/admin' : '/home');
            } catch (error) {
                console.error(error);
            }
        },
        onError: (error) => console.error(error),
    });

    return (
        <div id="sign-in-container" className="container mt-5">
            <div id="sign-in-card" className="card">
                <div id="sign-in-card-body" className="card-body">
                    <h5 id="sign-in-title" className="card-title text-center">
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </h5>
                    <form onSubmit={handleSubmit}>
                        <div id="sign-in-form-group" className="form-group">
                            {isSignup && (
                                <>
                                    <Input id="first-name-input" name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input id="last-name-input" name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                            <Input id="email-input" name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input
                                id="password-input"
                                name="password"
                                label="Password"
                                handleChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                handleShowPassword={handleShowPassword}
                            />
                            {isSignup && <Input id="confirm-password-input" name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                        </div>
                        <div>
                            <button id="sign-in-submit-btn" type="submit" className="btn btn-primary btn-block btn-spacing">
                                {isSignup ? 'Sign Up' : 'Sign In'}
                            </button>
                            <button id="google-signin-btn" type="button" onClick={login} className="btn btn-primary btn-block btn-spacing">
                                Sign in with Google
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            <button id="switch-mode-btn" type="button" onClick={switchMode} className="btn btn-link">
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );  
};

export default Auth;