import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfoForm = ({ userId }) => {
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
                const { data } = await axios.get(`/api/${userId}`);
                setFormData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (userId) {
            fetchUserData(); // Fetch user data only if userId exists
        }
    }, [userId]);

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
