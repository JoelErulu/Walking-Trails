// Import React components
import React, { useEffect, useState } from 'react';
import { useDispatch /*, useSelector */ } from 'react-redux';
import { Link } from 'react-router-dom';

// Import global stylesheet
// TODO: Remove material-ui styling and replace with global stylesheet, remove videos
import { Button, Grid, Typography, Container, Divider } from '@material-ui/core';
import useStyles, { GreyTrailOptions, containerStyle, MapID } from '../../styles/BigTrailsstyles.js';
import video4 from '../../assets/videos/ProjectVideo4.mp4';

// Import components
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import { getMarkers } from '../../actions/markers.js';
import { GreyCoords } from './Coords.js';

//TODO: Remove video
const Gray = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const initialState = { lat: '', lng: '', name: ''};

    //gets markers from store
    // const {markers, isLoading} = useSelector((state) => state.markers);
    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);

    const [isVideoOpen, setIsVideoOpen] = useState(false);//video opener
    const [videoSource, setVideoSource] = useState(null);

    //sets center of map
    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: 33.98251828102669, lng: -84.00032686036535 });
        // });
    }, []);

    //get markers from db
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch])

    //when marker is clicked
    const handleMarkerClick = (marker) => {
        if (selectedMarker && selectedMarker.key === marker.key) {
            // If the same marker is clicked, close the video
            setSelectedMarker(null);
            setIsVideoOpen(false);
        } else {
            // Close the current video before opening a new one
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

    <Container component="main" maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h6">Grey Trail</Typography>

                <Typography>
                {!selectedMarker && !isVideoOpen && (
                            <p>CLICK MARKER TO VIEW VIDEO</p>
                )}

                {selectedMarker && isVideoOpen && (
                    <div>
                        <video width="325px" height="auto" controls="controls" autoPlay>
                            <source src={videoSource} type="video/mp4" />
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
                                position={{lat: 33.97967560437334, lng: -83.99934638811425}}
                                onClick={() => handleMarkerClick({
                                    key: 1,
                                    lat: 33.97967560437334,
                                    lng: -83.99934638811425,
                                    name: "D Building Marker",
                                    videoSource: video4,
                                })}
                            />
                            {/* database markers */}
                            {/* {markers.map((marker) => (
                            <Marker 
                                position={{lat: marker.lat, lng: marker.lng}}
                                onClick={() => handleMarkerClick({
                                    key: marker._id,
                                    lat: marker.lat,
                                    lng: marker.lng,
                                    name: marker.name,
                                })}
                            />
                            ))} */}

                            {/* current marker */}
                            {markerFormData.lat && markerFormData.lng && (
                            <Marker 
                                position={{lat: markerFormData.lat, lng: markerFormData.lng}}
                                name = {markerFormData.name}
                            />
                            )}

                            <Polyline
                                path = {GreyCoords}
                                options={GreyTrailOptions}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
                </Grid>
            </Grid>
    </Container>

    );
};

export default Gray;