// Import React components
import React, { useState } from 'react';

// Import global CSS file
import '../interfaceSettings.css';

// Image imports
import gold from '../assets/images/gold.png';
import green from '../assets/images/green.png';
import gray from '../assets/images/gray.png';
import greenThumb from '../assets/images/greenMapThumbnail.png';
import goldThumb from '../assets/images/goldMapThumbnail.png';
import greyThumb from '../assets/images/grayMapThumbnail.png';

// TODO: This entire page needs to be restyled.
const Home = () => {

    // This is related to Trails implementation
    const [openGold, setOpenGold] = useState(false);
    const [openGreen, setOpenGreen] = useState(false);
    const [openGrey, setOpenGrey] = useState(false);

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
                        <img className="img-fluid rounded mx-auto" src={gold} alt="Gold Trail" />
                    )}
                    <hr />
                </div>
                <div className="col-sm">
                    <img className="img-fluid rounded mx-auto trailsCollapse" src={greenThumb} alt="Green Trail" onClick={() => setOpenGreen(!openGreen)}/>
                    {openGreen && (
                        <img className="img-fluid rounded mx-auto" src={green} alt="Green Trail" />
                    )}
                    <hr />
                </div>
                <div className="col-sm">
                    <img className="img-fluid rounded mx-auto trailsCollapse" src={greyThumb} alt="Grey Trail" onClick={() => setOpenGrey(!openGrey)}/>
                    {openGrey && (
                        <img className="img-fluid rounded mx-auto" src={gray} alt="Gray Trail" />
                    )}
                </div>
            </div>
          </div>
        </div>
        </section>
        </div>
    );
};

export default Home;