// Import React components
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Import global stylesheet
// TODO: Remove material-ui styling, replace with global stylesheet
import { Button, Grid, Typography, Container, Divider } from '@material-ui/core';
import useStyles, { GoldTrailOptions, containerStyle, MapID } from '../../styles/BigTrailsstyles.js';


// Import components
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { getMarkers } from '../../actions/markers.js';
import { GoldCords } from './Coords.js';
import axios from 'axios';

// TODO:Remove pins. Remove video functions.
const Gold = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const initialState = { lat: '', lng: '', name: '', exercise: '', img: '', };
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    // const { markers, isLoading } = useSelector((state) => state.markers);
    //const setMarkerFormData = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [videoSource /*}, setVideoSource */ ] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [videoFile, setVideoFile] = useState(null);

    useEffect(() => {
        setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
    }, []);

    //get markers from db
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch])

    /*
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
    */

    const handleVideoChange = (file) => {
        setVideoFile(file);
    };

    const handleVideoUpload = async () => {
        // Handle the video upload here
        // You can use a library like axios to send a POST request to your server
        // with the videoFile as the body

        // Example using axios:
        const formData = new FormData();
        formData.append('video', videoFile);

        try {
            const response = await axios.post('/api/upload', formData);
            console.log(response.data);
            // Handle the response from the server, e.g., update the state or display a message
        } catch (error) {
            console.error(error);
            // Handle the error, e.g., display an error message
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
        <Container component="main" maxWidth="xl">
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography className={classes.card} variant="h4" textAlign="center">Gold Trail</Typography>
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
                                <Button onClick={handleLike} variant="contained" color="primary">
                                    Like ({likes})
                                </Button>
                                <Button onClick={handleDislike} variant="contained" color="primary">
                                    Dislike ({dislikes})
                                </Button>
                                <br/>
                                <br/>
                                <input type="file" accept="video/*" onChange={handleVideoChange} />
                {/* Or use a button to trigger file selection */}
                <Button variant="contained" color="primary" component="label">
                    Upload Video
                    <input type="file" accept="video/*" style={{ display: "none" }} onChange={handleVideoUpload} />
                </Button>
                            </div>
                        )}
                    </Typography>
                   <Divider/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {/* <Link to ="/nutrition"><Button variant="contained" color="success">Nutrition</Button></Link> */}
                </Grid>
                <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                        <LoadScript
                            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={16}
                                options={MapID}
                            >
                                {/* Markers with different video sources */}
                                {/* Your Marker components */}
                                <Polyline
                                    path={GoldCords}
                                    options={GoldTrailOptions}
                                />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Gold;