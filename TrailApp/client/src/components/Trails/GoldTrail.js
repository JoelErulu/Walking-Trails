// Import React components
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Import Bootstrap and global stylesheet
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../../interfaceSettings.css';

// Import components
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { getMarkers } from '../../actions/markers.js';
import { GoldCords } from './Coords.js';
import axios from 'axios';

// TODO: Redesign page: remove trail markers and videos, keep trail overlay
const Gold = () => {
    const dispatch = useDispatch();
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [videoSource] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [videoFile, setVideoFile] = useState(null);

    useEffect(() => {
        setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
    }, []);

    // Get markers from db
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch]);

    const handleVideoChange = (file) => {
        setVideoFile(file);
    };

    const handleVideoUpload = async () => {
        const formData = new FormData();
        formData.append('video', videoFile);

        try {
            const response = await axios.post('/api/upload', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const closeVideo = () => {
        setSelectedMarker(null);
        setIsVideoOpen(false);
    };

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <Container fluid>
            <Row className="justify-content-between align-items-stretch" style={{ padding: '20px' }}>
                <Col xs={12} sm={6} md={3} className="bg-light">
                    <h4 className="text-center">Gold Trail</h4>
                    {!selectedMarker && !isVideoOpen && (
                        <p className="text-center">CLICK MARKER TO VIEW VIDEO</p>
                    )}
                    {selectedMarker && isVideoOpen && (
                        <div className="text-center">
                            <video width="325px" height="auto" controls autoPlay>
                                <source src={videoSource} type="video/mp4" />
                            </video>
                            <h5>{selectedMarker.name}</h5>
                            <p>{selectedMarker.exercise}</p>
                            <Button onClick={closeVideo} variant="primary" className="mt-2">
                                Close Video
                            </Button>
                            <div className="mt-3">
                                <Button onClick={handleLike} variant="success" className="me-2">
                                    Like ({likes})
                                </Button>
                                <Button onClick={handleDislike} variant="danger">
                                    Dislike ({dislikes})
                                </Button>
                            </div>
                            <Form.Group controlId="videoUpload" className="mt-4">
                                <Form.Label>Upload Video</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="video/*"
                                    onChange={(e) => handleVideoChange(e.target.files[0])}
                                />
                            </Form.Group>
                            <Button onClick={handleVideoUpload} variant="primary" className="mt-2">
                                Upload
                            </Button>
                        </div>
                    )}
                </Col>
                <Col xs={12} sm={6} md={9} className="bg-light">
                    <div style={{ height: '80vh', width: '100%' }}>
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap
                                mapContainerStyle={{ height: '100%', width: '100%' }}
                                center={center}
                                zoom={16}
                                options={{ mapId: '1ed395dbcf77ef66' }}
                            >
                                <Polyline path={GoldCords} options={{ strokeColor: '#FFD700', strokeWeight: 4 }} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Gold;