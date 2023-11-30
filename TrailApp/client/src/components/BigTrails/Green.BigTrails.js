import { Button, Grid, Typography, Container, Divider, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import useStyles, { GreenTrailOptions, containerStyle, MapID } from './styles.js';
import { createMarker, getMarkers } from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';
import { GreenCoords } from './Coords.js';
import FileBase from 'react-file-base64';
import { Link, useNavigate } from 'react-router-dom';
import video5 from '../../videos/ProjectVideo5.mp4';


const Green = () => {                   

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const initialState = { lat: '', lng: '', name: ''};

    //gets markers from store
    const {markers, isLoading} = useSelector((state) => state.markers);

    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);

    const [isVideoOpen, setIsVideoOpen] = useState(false);//video opener
    const [videoSource, setVideoSource] = useState(null);

    //sets center of map
    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: 33.9818935074201, lng: -84.00325859457956 });
        // });
    }, []);

    //get markers from db
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch])

    //when marker is clicked
    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);

        setIsVideoOpen(true);
        setVideoSource(marker.videoSource);
    };

    const closeVideo = () => {
        setSelectedMarker(null);
        setIsVideoOpen(false);
    };

    return (
    <Container component="main" maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h6">Green Trail</Typography>

                <Typography>
                {!selectedMarker && !isVideoOpen && (
                            <p>CLICK MARKER TO VIEW VIDEO</p>
                )}

                {selectedMarker && isVideoOpen && (
                    <div>
                        <video width="325px" height="auto" controls="controls" autoPlay>
                            <source src={videoSource} type="video5/mp4" />
                        </video>
                        <h5>{selectedMarker.name}</h5>
                        <p>{selectedMarker.exercise}</p>
                        <Button onClick={closeVideo} variant="contained" color="primary">
                            Close Video
                        </Button>
                       <br/>
                       <br/>
                    
                    </div>
                )}
                   
                </Typography>

                <Divider/>
            
            
                <br/>
                <br/>
                <br/>
                <br/>
                <Link to ="/nutrition"><Button variant="contained" color="success">Nutrition</Button></Link>

            </Grid>
            <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                <div style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                    <LoadScript
                        googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                            options={MapID}
                        >
                            {/* Initial Marker */}
                            <Marker
                                position={{lat: 33.97809098899297, lng: -84.00006969125516}}
                                onClick={() => handleMarkerClick({
                                    key: 1,
                                    lat: 33.97809098899297,
                                    lng: -84.00006969125516,
                                    name: "First",
                                    videoSource: video5,
                                })}
                            />
                            {/* database markers */}
                            {markers.map((marker) => (
                            <Marker 
                                position={{lat: marker.lat, lng: marker.lng}}
                                onClick={() => handleMarkerClick({
                                    key: marker._id,
                                    lat: marker.lat,
                                    lng: marker.lng,
                                    name: marker.name,
                                })}
                            />
                            ))}

                            {/* current marker */}
                            {markerFormData.lat && markerFormData.lng && (
                            <Marker 
                                position={{lat: markerFormData.lat, lng: markerFormData.lng}}
                                name = {markerFormData.name}
                            />
                            )}

                            <Polyline
                                path = {GreenCoords}
                                options={GreenTrailOptions}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
                </Grid>
            </Grid>
    </Container>

    );
};

export default Green;