// Import React components
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import components
import { getVideoAnalytics } from '../actions/videos';

// Import global stylesheet
import '../interfaceSettings.css';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';

// TODO: (Scope: High) Create two analytics panels for admins to view user & video analytics. 
// TODO: Fetch, process, and display data on overall user demographics and basic video statistics.
// TODO: Custom queries? Maybe use an external library?
const AdminAnalytics = () => {

    return (
        <div>
            <h2>Analytics</h2>
        </div>
    );
};

export default AdminAnalytics;