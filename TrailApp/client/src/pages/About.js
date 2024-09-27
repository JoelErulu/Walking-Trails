// Import React component
import React from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

// TODO: Communicate with clients for details on this.
const About = () => {
    return (
        <section id="about" className="container mt-5">
            <h1>About Us</h1>
            <p>This app was created as joint collaboration between Georgia Gwinnett College's ITEC students and EXCS students, at the request of faculty.</p>
            {/* List out credits of all participants? */}
        </section>
    );
};

export default About;