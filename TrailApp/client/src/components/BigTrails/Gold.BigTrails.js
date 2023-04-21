import { Button, Grid, Typography, Container, Divider, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import useStyles, { GoldTrailOptions, containerStyle, MapID } from './styles.js';
import { createMarker, getMarkers, updateMarker, deleteMarker} from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';
import { GoldCords } from './Coords.js';

const Gold = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const initialState = { lat: '', lng: '', name: ''};

    //gets markers from store
    const {markers, isLoading} = useSelector((state) => state.markers);

    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);

    //sets center of map
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
        });
    }, []);

    //get markers from db
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch])

    //click on map to fill in form data
    const _onClick = (event) => {
        setMarkerFormData({...markerFormData, lat: event.latLng.lat(), lng: event.latLng.lng()});
    };

    //when marker is clicked
    const handleMarkerClick = (event) => {
        setSelectedMarker(event);
        setMarkerFormData({...markerFormData, lat: event.lat, lng: event.lng, name: event.name})
    };

    //submit form to create marker
    const handleSubmit = (e) => {
        // e.preventDefault();

        dispatch(createMarker(markerFormData));

        if (selectedMarker.key) {
            dispatch(updateMarker(selectedMarker.key, markerFormData));
        }
        clear();
        
    
    };

    const handleDelete = (e) => {
        if (selectedMarker.key) {
            dispatch(deleteMarker(selectedMarker.key))
            clear();
        }
    };

    const clear = () => {
        setSelectedMarker(null)
        setMarkerFormData(initialState);

    };

    return (
    <Container component="main" maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h6">Gold Trail</Typography>

                <Typography>
                    {selectedMarker?.name}
                    <br/>
                    {selectedMarker?.lat}
                    <br/>
                    {selectedMarker?.lng}
                    <br/>
                    {selectedMarker?.key}
                    <br/>
                </Typography>

                <Divider/>
                
                <form onSubmit={handleSubmit}>
                <TextField name='name' variant="outlined" label="Name" margin="normal" value={markerFormData.name}
                onChange={(e) => setMarkerFormData({...markerFormData, name: e.target.value})}></TextField>
                <br/>
                <TextField name='lat' variant="outlined" label="Latitude" value = {markerFormData.lat} InputLabelProps={{ shrink: true }} margin="normal"></TextField>
                <br/>
                <TextField name='lng' variant="outlined" label="Longitude" value = {markerFormData.lng} InputLabelProps={{ shrink: true }} margin="normal"></TextField>
                <br/>
                <Button type='submit' color="primary" variant="contained" >Create</Button>
                </form>

                <Button type='submit' color="primary" variant="contained" onClick={handleDelete}>Delete</Button>



            </Grid>
            <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                <div style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                    <LoadScript
                        googleMapsApiKey="AIzaSyBWo0kr3jti4QZCS6vyqjHVKEv6L31S2VA"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                            options={MapID}
                            onClick={_onClick}
                        >
                            {/* Initial Marker */}
                            <Marker
                                position={{lat: 33.9804327949268, lng: -84.00527240759934}}
                                onClick={() => handleMarkerClick({
                                    key: 1,
                                    lat: 33.9804327949268,
                                    lng: -84.00527240759934,
                                    name: "First",
                                })}
                            />
                            {/* database markers */}
                            {markers.map((marker) => (
                            <Marker 
                                position={{lat: marker.lat, lng: marker.lng}}
                                key = {marker._id}
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
                                path = {GoldCords}
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

// https://react-google-maps-api-docs.netlify.app/#data