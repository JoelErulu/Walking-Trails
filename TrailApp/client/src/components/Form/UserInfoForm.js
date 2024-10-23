import React, { useState, useEffect } from 'react';

import axios from 'axios';

const UserInfoForm = ({ id }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        gender: '',
        age: '',
        ethnicity: '',
        community: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axios.get(`/api/users/${id}`);
                setFormData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (id) {
            fetchUserData(); 
        }
    }, [id]);

    return (
        <div className="user-info">
            <div className="user-field">
                <strong>Username:</strong> {formData.username}
            </div>
            <div className="user-field">
                <strong>Email:</strong> {formData.email}
            </div>
            <div className="user-field">
                <strong>Gender:</strong> {formData.gender}
            </div>
            <div className="user-field">
                <strong>Age:</strong> {formData.age}
            </div>
            <div className="user-field">
                <strong>Ethnicity:</strong> {formData.ethnicity}
            </div>
            <div className="user-field">
                <strong>Part of GGC Community:</strong> {formData.community}
            </div>
        </div>
    );
};

export default UserInfoForm;
