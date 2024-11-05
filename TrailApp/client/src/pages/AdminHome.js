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
                                View registered user profiles & assign roles.
                            </Card.Text>
                            <a href="/AdminControlPanel" className="btn btn-primary">
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
                                Manage videos & how they're listed.
                            </Card.Text>
                            <a href="/AdminControlPanel" className="btn btn-primary">
                                Manage Content
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title><strong>Analytics</strong></Card.Title>
                            <Card.Text>
                                View video & user analytics
                            </Card.Text>
                            <a href="/AdminAnalytics" className="btn btn-primary">
                                View Analytics
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AdminHome;