import React from 'react';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Correct import for react-icons

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => (
    <Form.Group as={Row} className="mb-3">
        <Form.Label column xs={12} sm={half ? 6 : 12}>
            {label}
        </Form.Label>
        <Col xs={12} sm={half ? 6 : 12}>
            <InputGroup>
                <Form.Control
                    name={name}
                    onChange={handleChange}
                    required
                    autoFocus={autoFocus}
                    type={type}
                />
                {name === 'password' && (
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={handleShowPassword}>
                            {type === "password" ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                    </InputGroup.Append>
                )}
            </InputGroup>
        </Col>
    </Form.Group>
);

export default Input;