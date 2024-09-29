// Import React components
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Import styling
import { Container, Row, Col, Button } from 'react-bootstrap';
import video4 from '../../assets/videos/ProjectVideo4.mp4';

// Import components
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';
import { getMarkers } from '../../actions/markers.js';
import { GreyCoords } from './Coords.js';

// TODO: Redesign page: remove trail markers and videos, keep trail overlay
const Gray = () => {
    const dispatch = useDispatch();
    const initialState = { lat: '', lng: '', name: '' };
    
    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [videoSource, setVideoSource] = useState(null);

    useEffect(() => {
        setCenter({ lat: 33.98251828102669, lng: -84.00032686036535 });
    }, []);

    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch]);

    const handleMarkerClick = (marker) => {
        if (selectedMarker && selectedMarker.key === marker.key) {
            setSelectedMarker(null);
            setIsVideoOpen(false);
        } else {
            setSelectedMarker(marker);
            setMarkerFormData({
                lat: marker.lat,
                lng: marker.lng,
                name: marker.name,
                exercise: marker.exercise,
                img: marker.img,
                text: marker.text,
            });
            setVideoSource(marker.videoSource);
            setIsVideoOpen(true);
        }
    };

    const closeVideo = () => {
        setSelectedMarker(null);
        setIsVideoOpen(false);
    };

    return (
        <Container fluid>
            <Row className="mt-4">
                <Col xs={12} sm={6} md={3} className="bg-white p-4">
                    <h6>Grey Trail</h6>
                    {!selectedMarker && !isVideoOpen && (
                        <p>CLICK MARKER TO VIEW VIDEO</p>
                    )}

                    {selectedMarker && isVideoOpen && (
                        <div>
                            <video width="325px" height="auto" controls autoPlay>
                                <source src={videoSource} type="video/mp4" />
                            </video>
                            <h5>{selectedMarker.name}</h5>
                            <p>{selectedMarker.exercise}</p>
                            <Button onClick={closeVideo} variant="primary">
                                Close Video
                            </Button>
                        </div>
                    )}
                    <hr />
                    <Link to="/nutrition">
                        <Button variant="success">Nutrition</Button>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={9} className="bg-light">
                    <div style={{ height: '80vh', width: '100%' }}>
                        <LoadScript googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU">
                            <GoogleMap
                                mapContainerStyle={{ height: '100%', width: '100%' }}
                                center={center}
                                zoom={16}
                                options={{ /* map options */ }}
                            >
                                <Marker
                                    position={{ lat: 33.97967560437334, lng: -83.99934638811425 }}
                                    onClick={() => handleMarkerClick({
                                        key: 1,
                                        lat: 33.97967560437334,
                                        lng: -83.99934638811425,
                                        name: 'D Building Marker',
                                        videoSource: video4,
                                    })}
                                />
                                <Polyline path={GreyCoords} options={{ /* polyline options */ }} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Gray;