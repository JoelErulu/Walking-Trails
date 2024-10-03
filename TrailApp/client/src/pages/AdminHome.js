// Import React components
import React from 'react';

// Import global stylesheet
import '../interfaceSettings.css';
import { Card, Row, Col } from 'react-bootstrap';

const AdminHome = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Administrator Dashboard</h2>

            {/* Row of Admin Functionality Cards */}
            <Row>
                {/* User Management Card */}
                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title><strong>User Management</strong></Card.Title>
                            <Card.Text>
                                Manage user accounts, view user profiles, reset passwords, and assign roles.
                            </Card.Text>
                            <a href="/admin/user-management" className="btn btn-primary">
                                Manage Users
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Content Management Card */}
                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title><strong>Content Management</strong></Card.Title>
                            <Card.Text>
                                Add, update, or delete content, including pages, posts, and media uploads.
                            </Card.Text>
                            <a href="/admin/content-management" className="btn btn-primary">
                                Manage Content
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Settings Card */}
                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title><strong>Site Settings</strong></Card.Title>
                            <Card.Text>
                                Configure global settings, manage themes, and adjust site security preferences.
                            </Card.Text>
                            <a href="/admin/settings" className="btn btn-primary">
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