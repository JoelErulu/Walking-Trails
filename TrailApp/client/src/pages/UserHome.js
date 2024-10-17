// Import React components
import React from 'react';
import { Link } from 'react-router-dom';

// Import global stylesheet & images
// TODO: Replace with GGC approved imagery
import '../interfaceSettings.css';
import pic1 from '../assets/images/Landing1.jpg';
import pic2 from '../assets/images/Landing2.jpg';
import pic3 from '../assets/images/Landing3.jpg';
import pic4 from '../assets/images/Landing4.jpg';
import pic5 from '../assets/images/Landing5.jpg';

const UserHome = () => {

  return (
    <div className="container-xl">
      {/* Showcase Section */}
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
                <p className="lead my-4">
                  The Walking Trails App is a mobile application designed to enhance the walking experience on Georgia Gwinnett College (GGC) trails through interactive and educational content focused on fitness, health, and wellness. This project is a collaborative effort between ITEC students, who are responsible for app development, and EXSC students, who create the content.
                </p>
                <Link to="/authorization" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Section */}
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
                <h2>Exercises</h2>
                <p className="lead">
                  Personalized workout tutorials and tailored workout spaces represent a revolution in the fitness world, a shift towards a more individualized approach to health and wellness.
                </p>
                <Link to="/exercises" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Exercises</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hydration Section */}
      <section id="hydration">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic3}
                  alt="Hydration importance"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h2>Hydration</h2>
                <p className="lead">
                  Hydration is crucial for maintaining the body's balance, especially during physical activities. Proper hydration supports energy levels, helps regulate body temperature, and enhances overall physical performance.
                </p>
                <Link to="/hydration" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Hydration</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic4}
                  alt="Nutrition for a healthy lifestyle"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h2>Nutrition</h2>
                <p className="lead">
                  Nutrition is the cornerstone of a healthy lifestyle, providing the essential nutrients needed to fuel your body. Proper nutrition can enhance performance, speed up recovery, and improve overall health.
                </p>
                <Link to="/nutrition" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Nutrition</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section id="climate">
        <div className="container my-4">
          <div className="card shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={pic5}
                  alt="Climate and outdoor activities"
                  className="img-fluid rounded mx-auto"
                />
              </div>
              <div className="col-md-6 p-3 p-md-5">
                <h2>Climate and Environment</h2>
                <p className="lead">
                  Climate and environmental conditions play a significant role in outdoor physical activities. Understanding how weather affects your performance, from heat and humidity to cold and wind, allows you to adjust your workouts and take precautions for safe and effective exercise.
                </p>
                <Link to="/climate" className="btn btn-primary mt-3 btn-responsive btn-block">
                  <i className="bi bi-chevron-right"></i> <span>Climate</span>
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