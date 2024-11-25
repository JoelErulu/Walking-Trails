import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../actions/auth';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        dispatch(resetPassword(token, newPassword, navigate));
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Reset Password</h5>

                    {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="confirmPassword">Confirm New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
