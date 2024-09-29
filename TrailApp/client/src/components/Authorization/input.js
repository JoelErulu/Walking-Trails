// Import React component
import React from 'react';

// Import styling
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => (
    <Col xs={12} sm={half ? 6 : 12}>
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control
                    name={name}
                    onChange={handleChange}
                    required
                    autoFocus={autoFocus}
                    type={type}
                    placeholder={label}
                />
                {name === 'password' && (
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={handleShowPassword}>
                            {type === "password" ? 'Show' : 'Hide'}
                        </Button>
                    </InputGroup.Append>
                )}
            </InputGroup>
        </Form.Group>
    </Col>
);

export default Input;