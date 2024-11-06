// Import React components
import React from 'react';
import { Link } from 'react-router-dom';

// Import global stylesheet & images
import '../interfaceSettings.css';
import pic1 from '../assets/images/Landing7.jpg';
import pic2 from '../assets/images/Landing2.jpg';
import pic3 from '../assets/images/Landing3.jpg';
import pic4 from '../assets/images/Landing4.jpg';
import pic5 from '../assets/images/Landing5.jpg';
import pic6 from '../assets/images/Landing6.jpg';

const UserHome = () => {
  return (
    <div className="container-xl">
      {/* Trails Section */}
      <section id="showcase">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic1}
                  alt="GGC Trails"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h1>Walking Trails</h1>
                <p className="lead my-4" style={{ textAlign: 'center' }}>
                  Discover scenic walking trails around campus designed to keep you active and engaged.
                </p>
                <Link to="/trails" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Trails</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Weight Exercises Section */}
      <section id="exercise">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic2}
                  alt="Personalized workout tutorials"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h2>Body Weight Exercises</h2>
                <p className="lead">
                  Try a variety of body-weight exercises to build strength and endurance.
                </p>
                <Link to="/bodyWeightExercises" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Exercises</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proper Walking Techniques Section */}
      <section id="properWalkingTechniques">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic3}
                  alt="Proper Walking Techniques"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h2>Proper Walking Techniques</h2>
                <p className="lead">
                  Learn techniques to improve your walking posture and efficiency.
                </p>
                <Link to="/properWalkingTechniques" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Proper Walking Techniques</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stretches For Walking Section */}
      <section id="stretchesForWalking">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic4}
                  alt="Stretches for Walking"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h2>Stretches For Walking</h2>
                <p className="lead">
                  Enhance flexibility and prevent injuries with these essential stretches.
                </p>
                <Link to="/stretchesForWalking" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Stretches For Walking</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition and Hydration Section */}
      <section id="nutritionAndHydration">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic6}
                  alt="Nutrition and Hydration"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h2>Nutrition and Hydration</h2>
                <p className="lead">
                  Fuel your body with the right nutrients and stay hydrated for better performance.
                </p>
                <Link to="/nutritionAndHydration" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Nutrition and Hydration</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Injury Prevention Section */}
      <section id="injuryPrevention">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic5}
                  alt="Injury Prevention"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h2>Injury Prevention</h2>
                <p className="lead">
                  Learn tips and techniques to prevent injuries and stay active.
                </p>
                <Link to="/injuryPrevention" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Injury Prevention</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserHome;
