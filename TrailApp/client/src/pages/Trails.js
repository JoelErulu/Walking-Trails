// Import React components
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import global CSS file
import '../interfaceSettings.css';

// Image imports
import gold from '../assets/images/gold.png';
import green from '../assets/images/green.png';
import gray from '../assets/images/gray.png';

// Google Maps components
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { GoldCords, GreenCoords, GreyCoords } from '../components/Trails/Coords.js';

// README: This entire page needs to be restyled.
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
        <div className="container" style={{ background: '#ffffff' }}>
            <h1 className="text-center">WALKERS</h1>
            <div className="pb-3 text-center">
                <div className="col-sm">
                    <h5 className="trailsCollapseText" onClick={() => setOpenGold(!openGold)}>
                        Gold Trail
                    </h5>
                    {openGold && (
                        <Link to="/gold">
                            <img className="image" src={gold} alt="Gold Trail" />
                        </Link>
                    )}
                    <hr />
                </div>
                <div className="col-sm">
                    <h5 className="trailsCollapseText" onClick={() => setOpenGreen(!openGreen)}>
                        Green Trail
                    </h5>
                    {openGreen && (
                        <Link to="/green">
                            <img className="image" src={green} alt="Green Trail" />
                        </Link>
                    )}
                    <hr />
                </div>
                <div className="col-sm">
                    <h5 className="trailsCollapseText" onClick={() => setOpenGrey(!openGrey)}>
                        Gray Trail
                    </h5>
                    {openGrey && (
                        <Link to="/gray">
                            <img className="image" src={gray} alt="Gray Trail" />
                        </Link>
                    )}
                    <hr />
                </div>
            </div>
            <div className="col-xl text-center" style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                <LoadScript
                    googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU"
                >
                    <GoogleMap
                        mapContainerStyle={{ height: "100%", width: "100%" }}
                        center={center}
                        zoom={16}
                        options={mapID}
                    >
                        <Polyline path={GoldCords} options={{ strokeColor: "#FFD700", strokeWeight: 4 }} onClick={goGold} />
                        <Polyline path={GreenCoords} options={{ strokeColor: "#008000", strokeWeight: 4 }} onClick={goGreen} />
                        <Polyline path={GreyCoords} options={{ strokeColor: "#808080", strokeWeight: 4 }} onClick={goGrey} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Home;