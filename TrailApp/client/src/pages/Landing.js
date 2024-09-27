// Import React components
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import styling & images
// TODO: Replace with GGC approved imagery
import '../interfaceSettings.css'; // Import your global CSS file
import pic1 from '../assets/images/ggcnew.jpg';
import pic2 from '../assets/images/exercise1.jpg';
import pic4 from '../assets/images/nutrition1.jpg';
import pic5 from '../assets/images/hydration.jpg';
import pic6 from '../assets/images/climate.jpg';

const Landing = () => {

  const navigate = useNavigate();

  const handleAuthRedirect = (path) => {
    navigate(`/auth?redirect=${path}`);
  };

  return (

    <div className="container-xl">
      {/* Showcase Section */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 p-3">
              <h1>Fitness/Walking Trails App</h1>
              <p className="lead my-4">
                The Walking Trails App is a mobile application designed to enhance the walking experience on Georgia Gwinnett College (GGC) trails through interactive and educational content focused on fitness, health, and wellness. This project is a collaborative effort between ITEC students, who are responsible for app development, and EXSC students, who create the content.
              </p>
              <Link to="/auth" className="btn btn-primary">Sign In</Link>
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                src={pic1}
                alt="GGC Trails"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <hr />
      </section>

      {/* Workout Section */}
      <section id="workout">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={pic2}
                alt="Workout"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 p-3 p-md-5">
              <div className="card-body">
                <h2>Exercises</h2>
                <p className="lead">
                  Personalized workout tutorials and tailored workout spaces represent a revolution in the fitness world, a shift towards a more individualized approach to health and wellness.
                </p>
                <a href="/auth" className="btn btn-primary mt-3">
                  <i className="bi bi-chevron-right"></i> Exercises
                </a>
                {/*
                  <button onClick={() => handleAuthRedirect("/exercise")} className="btn btn-primary mt-3">
                    <i className="bi bi-chevron-right"></i> Exercises
                  </button>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hydration Section */}
      <section id="hydration">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={pic5}
                alt="Hydration"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 p-3 p-md-5">
              <div className="card-body">
                <h2>Hydration</h2>
                <p className="lead">
                  Hydration is crucial for maintaining the body's balance, especially during physical activities. Proper hydration supports energy levels, helps regulate body temperature, and enhances overall physical performance.
                </p>
                <a href="/auth" className="btn btn-primary mt-3">
                  <i className="bi bi-chevron-right"></i> Hydration
                </a>
                {/*
                  <button onClick={() => handleAuthRedirect("/hydration")} className="btn btn-primary mt-3">
                    <i className="bi bi-chevron-right"></i> Hydration
                  </button>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={pic4}
                alt="Nutrition"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 p-3 p-md-5">
              <div className="card-body">
                <h2>Nutrition</h2>
                <p className="lead">
                  Nutrition is the cornerstone of a healthy lifestyle, providing the essential nutrients needed to fuel your body. Proper nutrition can enhance performance, speed up recovery, and improve overall health.
                </p>
                <a href="/auth" className="btn btn-primary mt-3">
                  <i className="bi bi-chevron-right"></i> Nutrition
                </a>
                {/*
                  <button onClick={() => handleAuthRedirect("/nutrition")} className="btn btn-primary mt-3">
                    <i className="bi bi-chevron-right"></i> Nutrition
                  </button>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section id="climate">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={pic6}
                alt="Climate"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 p-3 p-md-5">
              <div className="card-body">
                <h2>Climate and Environment</h2>
                <p className="lead">
                  Climate and environmental conditions play a significant role in outdoor physical activities. Understanding how weather affects your performance, from heat and humidity to cold and wind, allows you to adjust your workouts and take precautions for safe and effective exercise.
                </p>
                <a href="/auth" className="btn btn-primary mt-3">
                  <i className="bi bi-chevron-right"></i> Climate
                </a>
                {/*
                  <button onClick={() => handleAuthRedirect("/climate")} className="btn btn-primary mt-3">
                    <i className="bi bi-chevron-right"></i> Climate
                  </button>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;