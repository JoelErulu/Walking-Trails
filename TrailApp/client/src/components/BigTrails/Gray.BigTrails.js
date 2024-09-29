// Import React components
import React, { useEffect, useState } from 'react';
import { useDispatch /*, useSelector */ } from 'react-redux';
import { Link } from 'react-router-dom';

// Import global stylesheet and Bootstrap
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap'; // Bootstrap components
import useStyles, { GreyTrailOptions, containerStyle, MapID } from '../../styles/BigTrailsstyles.js';
import video4 from '../../assets/videos/ProjectVideo4.mp4';

// Import components
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';
import { getMarkers } from '../../actions/markers.js';
import { GreyCoords } from './Coords.js';

const Gray = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const initialState = { lat: '', lng: '', name: '' };

    // State management
    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false); // video opener
    const [videoSource, setVideoSource] = useState(null);

    // Set center of map
    useEffect(() => {
        setCenter({ lat: 33.98251828102669, lng: -84.00032686036535 });
    }, []);

    // Get markers from the database
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch]);

    // Handle marker click
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
            });
            setVideoSource(marker.videoSource);
            setIsVideoOpen(true);
        }
    };

    // Close video
    const closeVideo = () => {
        setSelectedMarker(null);
        setIsVideoOpen(false);
    };

    return (
        <Container fluid>
            <Row className="my-3">
                <Col xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Card className="p-3">
                        <Card.Title>Grey Trail</Card.Title>
                        <Card.Body>
                            {!selectedMarker && !isVideoOpen && (
                                <p>CLICK MARKER TO VIEW VIDEO</p>
                            )}
                            {selectedMarker && isVideoOpen && (
                                <div>
                                    <video width="325px" height="auto" controls autoPlay>
                                        <source src={videoSource} type="video/mp4" />
                                    </video>
                                    <h5>{selectedMarker.name}</h5>
                                    <Button variant="primary" onClick={closeVideo}>
                                        Close Video
                                    </Button>
                                </div>
                            )}
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/nutrition">
                                <Button variant="success">Nutrition</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ display: 'inline-block', height: '80vh', width: '100%' }}>
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={16}
                                options={MapID}
                            >
                                <Marker
                                    position={{ lat: 33.97967560437334, lng: -83.99934638811425 }}
                                    onClick={() => handleMarkerClick({
                                        key: 1,
                                        lat: 33.97967560437334,
                                        lng: -83.99934638811425,
                                        name: "D Building Marker",
                                        videoSource: video4,
                                    })}
                                />
                                {markerFormData.lat && markerFormData.lng && (
                                    <Marker
                                        position={{ lat: markerFormData.lat, lng: markerFormData.lng }}
                                        name={markerFormData.name}
                                    />
                                )}
                                <Polyline path={GreyCoords} options={GreyTrailOptions} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Gray;