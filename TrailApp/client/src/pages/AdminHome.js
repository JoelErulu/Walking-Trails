// Import React components
import React from 'react';

// Import global stylesheet
import '../interfaceSettings.css';
import { Card, Row, Col } from 'react-bootstrap';

const AdminHome = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Administrator Dashboard</h2>
            <Row>
                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title><strong>Role Management</strong></Card.Title>
                            <Card.Text>
                                View registered user profiles and assign roles.
                            </Card.Text>
                            <a href="/AdminManager" className="btn btn-primary">
                                Manage Users
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title><strong>Media Management</strong></Card.Title>
                            <Card.Text>
                                Add, update, or delete videos.
                            </Card.Text>
                            <a href="/AdminManager" className="btn btn-primary">
                                Manage Content
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title><strong>Statistics</strong></Card.Title>
                            <Card.Text>
                                Analyze site and user statistics
                            </Card.Text>
                            <a href="/adminStatistics" className="btn btn-primary">
                                Adjust Settings
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AdminHome;