import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';
import useStyles from './styles.js';
import Footer from '../../components/Navbar/Footer.js';
import pic1 from '../../images/trailpic.png';
import pic2 from '../../images/personalized.jpg';
import pic3 from '../../images/handshake1.jpg';

const Landing = () => {
    const classes = useStyles();

    return (
 
        <Container maxWidth="xl">
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
                    {/*
                    <link
                        href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="style.css" />
                    */}
                    <title>WALKERS</title>
                </head>
                <body>
                   {/*  <!-- Navbar -->*/}{/*
                    <nav class="navbar navbar-expand-lg bg-success navbar-dark py-3 fixed-top">
                        <div class="container">
                            <a href="#" class="navbar-brand">GGC Walking Trails</a>

                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navmenu"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navmenu">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a href="#mission" class="nav-link">Our Mission For GGC</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#workouts" class="nav-link">New Workouts For You</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#trails" class="nav-link">New Trails For GGC</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
              */}

{/* <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
                <div className="container">
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
              
                    {/*} <!-- Showcase -->*/}
                    <section
                        class="bg-dark text-light p-5 pb-5 p-lg-0 pt-lg-5 text-center text-sm-start"
                    >
                        <div class="container">
                            <div class="d-lg-flex align-items-center justify-content-between">
                                <div class = "p-3">
                                    <h1>Walking Trails App </h1>
                                <p class="lead my-4">
                                Embark on a journey of well-being as you explore our picturesque walking trails. Each step unveils a path to wellness, inviting you to immerse yourself in nature's tranquility. Our scenic trails are more than a route; they are a gateway to a healthier, revitalized you.
                                </p>
                                <Button class = "btn btn-primary" component={Link} to="/auth" variant="contained" color="primary" className={classes.submit}>Sign In</Button>
                            </div>
                            <img
                                class="img-fluid w-50 p-5 d-sm-none d-lg-block"
                                src={pic1}
                                alt=""
                            />
                        </div>
                    </div>
                    <hr></hr>
                </section>
                
                {/*<!-- Newsletter -->*/}
                <section class="bg-dark text-light p-5">
                    <div class="container">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <h3 class="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

                            <div class="input-group news-input">
                                <input type="text" class="form-control" placeholder="Enter Email" />
                                <button class="btn btn-primary btn-lg" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
                </section>

               {/*} <!-- Boxes -->*/}
                <section class="p-5">
                    <div class="container">
                        <div class="row text-center g-4">
                            <div class="col-md">
                                <div class="card bg-dark text-light">
                                    <div class="card-body text-center">
                                        <div class="h1 mb-3">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <h3 class="card-title mb-3">Gwinnett</h3>
                                        <p class="card-text">
                                        Gwinnett County, with its blend of growth and grace, progress and heritage, 
                                        stands as a beacon of what the future can hold.
                                        </p> {/*  In this section there is information about gwinnett county, information about gwinnett college,
                                                  there is simple qutoes */}
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card bg-dark text-light">
                                    <div class="card-body text-center">
                                        <div class="h1 mb-3">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <h3 class="card-title mb-3">GGC</h3>
                                        <p class="card-text">
                                        Gwinnett College, a beacon of learning and aspiration, 
                                        stands proudly as a crucible of knowledge.
                                        </p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card bg-dark text-light">
                                    <div class="card-body text-center">
                                        <div class="h1 mb-3">
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <h3 class="card-title mb-3">Other</h3>
                                        <p class="card-text">
                                        "Education is the most powerful weapon which you can use to change the world." – Nelson Mandela?
                                        </p>
                                        <a href="#" class="btn btn-primary">Just Quotes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Learn Sections -->*/}
                <section id="workout" class="p-5 bg-dark text-light">
                    <div class="container">
                        <div class="text-white row align-items-center justify-content-between">
                            <div class="col-md d-sm-none d-lg-block">
                                <img src={pic2} class="img-fluid" alt="" />
                            </div>
                            <div class="col-md p-5">
                                <h2>Personalized Workouts/Workout spaces</h2>
                                <p class="lead">
                                Personalized workouts and tailored workout spaces represent a revolution in the fitness world, a shift towards a more individualized approach to health and wellness. 
                                This concept transcends the one-size-fits-all model, recognizing that each body is unique, each fitness journey distinct, and every goal personal.
                                </p>
                               
                                <a href="#" class="btn btn-primary mt-3">
                                    <i class="bi bi-chevron-right"></i> Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="community" class="p-5 bg-dark text-light">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-md p-5">
                                <h2>Community Partners</h2>
                                <p class="lead">
                                A community partner is a cornerstone of collaborative progress, embodying the spirit of unity and shared purpose.
                                 These vital allies, whether they are local businesses, non-profit organizations, 
                                educational institutions, or individual activists, play a pivotal role in weaving the social fabric of a community.
                                </p>
                               
                                <a href="#" class="btn btn-primary mt-3">
                                    <i class="bi bi-chevron-right"></i> Read More
                                </a>
                            </div>
                            <div class="col-md d-sm-none d-lg-block">
                                <img src={pic3} class="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                
                {/*<!-- Question Accordion -->*/}
                <section id="questions" class="p-5">
                    <div class="container">
                        <h2 class="text-white text-center mb-4">Frequently Asked Questions</h2>
                        <div class="accordion accordion-flush" id="questions">
                            {/*} <!-- Item 1 -->*/}
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#question-one"
                                    >
                                        Where is Gwinnett county located at?
                                    </button>
                                </h2>
                                <div
                                    id="question-one"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#questions"
                                >
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                        beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                        totam tempora accusamus modi explicabo accusantium consequatur,
                                        praesentium rem quisquam molestias at quos vero. Officiis ad
                                        velit doloremque at. Dignissimos praesentium necessitatibus
                                        natus corrupti cum consequatur aliquam! Minima molestias iure
                                        quam distinctio velit.
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Item 2 -->*/}
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#question-two"
                                    >
                                        How many minute does it take to run 1 mile?
                                    </button>
                                </h2>
                                <div
                                    id="question-two"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#questions"
                                >
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                        beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                        totam tempora accusamus modi explicabo accusantium consequatur,
                                        praesentium rem quisquam molestias at quos vero. Officiis ad
                                        velit doloremque at. Dignissimos praesentium necessitatibus
                                        natus corrupti cum consequatur aliquam! Minima molestias iure
                                        quam distinctio velit.
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Item 3 -->*/}
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#question-three"
                                    >
                                        How big is Georgia Gwinnett College?
                                    </button>
                                </h2>
                                <div
                                    id="question-three"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#questions"
                                >
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                        beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                        totam tempora accusamus modi explicabo accusantium consequatur,
                                        praesentium rem quisquam molestias at quos vero. Officiis ad
                                        velit doloremque at. Dignissimos praesentium necessitatibus
                                        natus corrupti cum consequatur aliquam! Minima molestias iure
                                        quam distinctio velit.
                                    </div>
                                </div>
                            </div>
                            {/*} <!-- Item 4 -->*/}
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#question-four"
                                    >
                                        How to do push ups with one hand?
                                    </button>
                                </h2>
                                <div
                                    id="question-four"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#questions"
                                >
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                        beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                        totam tempora accusamus modi explicabo accusantium consequatur,
                                        praesentium rem quisquam molestias at quos vero. Officiis ad
                                        velit doloremque at. Dignissimos praesentium necessitatibus
                                        natus corrupti cum consequatur aliquam! Minima molestias iure
                                        quam distinctio velit.
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Item 5 -->*/}
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#question-five"
                                    >
                                        How big is the gold trail?
                                    </button>
                                </h2>
                                <div
                                    id="question-five"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#questions"
                                >
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                        beatae fuga animi distinctio perspiciatis adipisci velit maiores
                                        totam tempora accusamus modi explicabo accusantium consequatur,
                                        praesentium rem quisquam molestias at quos vero. Officiis ad
                                        velit doloremque at. Dignissimos praesentium necessitatibus
                                        natus corrupti cum consequatur aliquam! Minima molestias iure
                                        quam distinctio velit.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="instructors" class="p-5 bg-dark">
                    <div class="container">
                        <h2 class="text-center text-white">Our Team</h2>
                        <p class="lead text-center text-white mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, repellat?
                        </p>
                        <div class="row g-4">
                            <div class="col-md-6 col-lg-3">
                                <div class="card bg-light">
                                    <div class="card-body text-center">
                                        <img
                                            src=""
                                            class="rounded-circle mb-3"
                                            alt=""
                                        />
                                        <h3 class="card-title mb-3">Lorem ipsum dolor sit amet.</h3>
                                        <p class="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                                        </p>
                                        <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="card bg-light">
                                    <div class="card-body text-center">
                                        <img
                                            src=""
                                            class="rounded-circle mb-3"
                                            alt=""
                                        />
                                        <h3 class="card-title mb-3">Lorem ipsum dolor sit amet.
                                        </h3>
                                        <p class="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                                        </p>
                                        <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                    </div>
                                </div>
                            </div>
{/** */}
                            <div class="col-md-6 col-lg-3">
                                <div class="card bg-light">
                                    <div class="card-body text-center">
                                        <img
                                            src=""
                                            class="rounded-circle mb-3"
                                            alt=""
                                        />
                                        <h3 class="card-title mb-3">Lorem ipsum dolor sit amet.</h3>
                                        <p class="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                                        </p>
                                        <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="card bg-light">
                                    <div class="card-body text-center">
                                        <img
                                            src=""
                                            class="rounded-circle mb-3"
                                            alt=""
                                        />
                                        <h3 class="card-title mb-3">Lorem ipsum dolor sit amet.</h3>
                                        <p class="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                                        </p>
                                        <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                        <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<!-- Contact & Map --> */}
                <section class="p-5">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-md">
                                <h2 class="text-white text-center mb-4">Contact Info</h2>
                                <ul class="list-group list-group-flush lead">
                                    <li class="list-group-item">
                                        <span class="fw-bold">Main Location:</span> Lorem ipsum dolor sit amet.
                                    </li>
                                    <li class="list-group-item">
                                        <span class="fw-bold">Student Phone:</span> (333) 333-3333
                                    </li>
                                    <li class="list-group-item">
                                        <span class="fw-bold">Enrollment Email:</span> (555)
                                        enroll@trail.test
                                    </li>
                                    <li class="list-group-item">
                                        <span class="fw-bold">Student Email:</span>
                                        student@trail.test
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md">
                                <div id="map"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<-- Footer -->*/}
                {/* <footer class="rounded shadow-lg p-5 bg-white text-primary text-center position-relative">
                    <div>
                        <h1 class="lead">Copyright &copy; Walking Trails</h1>

                        <a href="#" class="position-absolute bottom-0 end-0 p-5">
                            <i class="bi bi-arrow-up-circle h1"></i>
                        </a>
                    </div>
                </footer> */}

               {/*} <!-- Modal -->*/}
                {/* <div
                    class="modal fade"
                    id="enroll"
                    tabindex="-1"
                    aria-labelledby="enrollLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="enrollLabel">Enrollment</h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <p class="lead">Fill out this form and we will get back to you</p>
                                <form>
                                    <div class="mb-3">
                                        <label for="first-name" class="col-form-label">
                                            First Name:
                                        </label>
                                        <input type="text" class="form-control" id="first-name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="last-name" class="col-form-label">Last Name:</label>
                                        <input type="text" class="form-control" id="last-name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="col-form-label">Email:</label>
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="phone" class="col-form-label">Phone:</label>
                                        <input type="tel" class="form-control" id="phone" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div> */}
{/*ignore this}
                {/*}  <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js"></script>

    <script>
      mapboxgl.accessToken =
        'pk.eyJ1IjoiYnRyYXZlcnN5IiwiYSI6ImNrbmh0dXF1NzBtbnMyb3MzcTBpaG10eXcifQ.h5ZyYCglnMdOLAGGiL1Auw'
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.060982, 42.35725],
        zoom: 18,
      })
    </script>*/}
            </body>
        </html>
<Footer />
</Container >



    );
};

export default Landing;