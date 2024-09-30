// Import React components
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Import styling
import { Container, Row, Col, Button } from 'react-bootstrap';
import video5 from '../../assets/videos/ProjectVideo5.mp4';
import TrailNavbar from '../Navbar/TrailNavbar.js'

// Import components
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';
import { getMarkers } from '../../actions/markers.js';
import { GreenCoords } from './Coords.js';

// TODO: Redesign page: remove trail markers and videos, keep trail overlay
const Green = () => {
    const dispatch = useDispatch();
    const initialState = { lat: '', lng: '', name: '' };

    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [videoSource, setVideoSource] = useState(null);

    useEffect(() => {
        setCenter({ lat: 33.9818935074201, lng: -84.00325859457956 });
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
                    <h6>Green Trail</h6>
                    <TrailNavbar />
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
                                    position={{ lat: 33.97809098899297, lng: -84.00006969125516 }}
                                    onClick={() => handleMarkerClick({
                                        key: 1,
                                        lat: 33.97809098899297,
                                        lng: -84.00006969125516,
                                        name: 'WRC Marker',
                                        videoSource: video5,
                                    })}
                                />
                                <Polyline path={GreenCoords} options={{ /* polyline options */ }} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Green;