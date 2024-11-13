import React, { useState } from 'react';
import axios from 'axios';

const SendResetLink = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/send-reset-link', { email });
            setMessage(response.data);
        } catch (error) {
            setMessage('Error sending reset link');
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Send Reset Link</h5>
                    {message && <div className="alert alert-info text-center">{message}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">Send Reset Link</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SendResetLink;
