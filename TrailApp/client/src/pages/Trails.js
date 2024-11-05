// Import React components
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import global CSS file
import '../interfaceSettings.css';

// Image imports
import gold from '../assets/images/gold.png';
import green from '../assets/images/green.png';
import gray from '../assets/images/gray.png';
import greenThumb from '../assets/images/greenMapThumbnail.png';
import goldThumb from '../assets/images/goldMapThumbnail.png';
import greyThumb from '../assets/images/grayMapThumbnail.png';

// Google Maps components
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { GoldCoords, GreenCoords, GreyCoords } from '../components/Trails/Coords.js';

// TODO: This entire page needs to be restyled.
const Home = () => {
    const navigate = useNavigate();

    // This is related to Trails implementation
    const [center, setCenter] = useState('');
    const [openGold, setOpenGold] = useState(false);
    const [openGreen, setOpenGreen] = useState(false);
    const [openGrey, setOpenGrey] = useState(false);

    useEffect(() => {
        setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
    }, []);

    const goGold = () => { navigate('/gold'); };
    const goGreen = () => { navigate('/green'); };
    const goGrey = () => { navigate('/gray'); };
    const mapID = { mapId: "1ed395dbcf77ef66" };

    return (
        <div className="container-xl" style={{ background: '#ffffff' }}>
        <section id="trailmaps">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="pb-3 text-center">
                <div className="col-sm">
                    <br />
                    <img className="img-fluid rounded mx-auto trailsCollapse" src={goldThumb} alt="Gold Trail" onClick={() => setOpenGold(!openGold)}/>
                    {openGold && (
                        <Link to="/goldTrail">
                            <img className="img-fluid rounded mx-auto" src={gold} alt="Gold Trail" />
                        </Link>
                    )}
                    <hr />
                </div>
                <div className="col-sm">
                    <img className="img-fluid rounded mx-auto trailsCollapse" src={greenThumb} alt="Green Trail" onClick={() => setOpenGreen(!openGreen)}/>
                    {openGreen && (
                        <Link to="/greenTrail">
                            <img className="img-fluid rounded mx-auto" src={green} alt="Green Trail" />
                        </Link>
                    )}
                    <hr />
                </div>
                <div className="col-sm">
                    <img className="img-fluid rounded mx-auto trailsCollapse" src={greyThumb} alt="Grey Trail" onClick={() => setOpenGrey(!openGrey)}/>
                    {openGrey && (
                        <Link to="/grayTrail">
                            <img className="img-fluid rounded mx-auto" src={gray} alt="Gray Trail" />
                        </Link>
                    )}
                </div>
            </div>
          </div>
        </div>
      </section>
            <div className="col-xl text-center container my-4 align-items-center shadow-sm" style={{ display: "center", height: "80vh", width: "100%" }}>
                <LoadScript
                    googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU"
                >
                    <GoogleMap
                        mapContainerStyle={{ height: "100%", width: "100%" }}
                        center={center}
                        zoom={16}
                        options={mapID}
                    >
                        <Polyline path={GoldCoords} options={{ strokeColor: "#FFD700", strokeWeight: 4 }} onClick={goGold} />
                        <Polyline path={GreenCoords} options={{ strokeColor: "#008000", strokeWeight: 4 }} onClick={goGreen} />
                        <Polyline path={GreyCoords} options={{ strokeColor: "#808080", strokeWeight: 4 }} onClick={goGrey} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Home;