import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, Container, Button, Divider, Collapse} from '@material-ui/core';
import useStyles, {goldOptions, greenOptions, greyOptions, containerStyle, exampleMapStyles} from '../styles/Homestyles.js';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api';
import { GoldCords, GreenCoords, GreyCoords} from '../components/BigTrails/Coords.js'
import '../interfaceSettings.css'; // Import the CSS file
import gold from '../assets/images/gold.png';
import green from '../assets/images/green.png';
import gray from '../assets/images/gray.png';
import { red } from '@material-ui/core/colors';

const Home = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [center, setCenter] = useState('');
    const [openGold, setOpenGold] = useState(false);
    const [openGreen, setOpenGreen] = useState(false);
    const [openGrey, setOpenGrey] = useState(false);

    // };
    //Keep this in mind
    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
        // });
    }, []);

    const goGold = (e) => {
        navigate('/gold')
    };

    const goGreen = (e) => {
        navigate('/green')
    };

    const goGrey = (e) => {
        navigate('/gray')
    };

    const mapID = {
        mapId: "1ed395dbcf77ef66"
    };


    return (
        <Container component="main" maxWidth="xl">
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
          />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="" />

          <title>WALKERS</title>
        </head>
        <body>

        <div class="container" style={{ background: '#ffffff' }}>
            <div class="col-xl text-center pb-3">
                <div class="col-sm trailsCollapseText">              
                <Typography className = {classes.gold} onClick = {() => setOpenGold(!openGold)}>Gold Trail</Typography>
                    <Collapse in={openGold}>
                        <Link to ="/gold">
                            <img className={classes.image} src={gold} alt="Gold Trail"/>
                        </Link>
                    </Collapse>
                    <Divider/>
                </div>
                <div class="col-sm">
                <Typography className = {classes.green} onClick = {() => setOpenGreen(!openGreen)}>Green Trail</Typography>
                    <Collapse Collapse in={openGreen}>
                        <Link to ="/green">
                        <img className={classes.image} src={green} alt="Green Trail"/>
                        </Link>
                    </Collapse>
                    <Divider/>                
                </div>
                <div class="col-sm">
                <Typography className = {classes.grey} onClick = {() => setOpenGrey(!openGrey)}>Gray Trail</Typography>
                    <Collapse Collapse in={openGrey}>
                        <Link to ="/gray">
                        <img className={classes.image} src={gray} alt="Gray Trail"/>
                        </Link>
                    </Collapse>
                    <Divider/>               
                </div>
                
            </div>
        </div>
        <hr />
        <div class="container" style={{ background: '#ffffff' }}>
            <div class="col-xl text-center pb-3">
                <div class="col-sm align-items-center" style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                    <LoadScript
                        googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                            options={mapID}
                        >
                            <Polyline
                                path = {GoldCords}
                                options={goldOptions}
                                onClick={goGold}
                            />
                            <Polyline
                                path = {GreenCoords}
                                options={greenOptions}
                                onClick={goGreen}
                            />
                            <Polyline 
                                path = {GreyCoords}
                                options={greyOptions}
                                onClick={goGrey}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
                

        {/*
                
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h5">Gold Trail</Typography>
                <Link to ="/gold">
                    <img className={classes.image} src={gold} alt="Gold Trail"/>
                </Link>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h5">Green Trail</Typography>
                <Link to ="/green">
                    <img className={classes.image} src={green} alt="Green Trail"/>
                </Link>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h5">Gray Trail</Typography>
                <Link to ="/gray">
                    <img className={classes.image} src={gray} alt="Gray Trail"/>
                </Link>
            </Grid> 
            */}
            </body>
            </html>
            
        </Container>
    );
};

export default Home;

// https://react-google-maps-api-docs.netlify.app/#data