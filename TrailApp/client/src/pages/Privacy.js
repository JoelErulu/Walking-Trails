// Import React components
import React from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

/* This is copied over from the GGC.edu privacy policy as a temporary placeholder. */
const Privacy = () => {
    return (
        <section id="privacy" className="container mt-5">
            <h1>Privacy Policy</h1>
            <p>We will not obtain personally identifying information about you when you visit our site, unless you choose to provide such information to us. You may volunteer to provide us personally identifying information so that the College can respond to any questions or provide you with information. Except as might be required by law, we do not share any information we receive with any outside parties. Here is how we handle information about your visit to our website:</p>
            <h3>Information Collected and Stored Automatically</h3>
            <p>If you do nothing during your visit but browse through the website, read pages or download information, we will gather and store certain information about your visit automatically. This information does not identify you personally. We automatically collect and store only the following information about your visit:</p>
            <ul>
                <li>The Internet domain (for example,"xcompany.com" if you use a private Internet access account, or "yourschool.edu" if you connect from a university's domain) and IP address (an IP address is a number that is automatically assigned to your computer whenever you are surfing the Web) from which you access our website;</li>
                <li>the type of browser and operating system used to access our site;</li>
                <li>the date and time you access our site;</li>
                <li>the pages you visit; and</li>
                <li>if you linked to the Georgia Gwinnett College website from another website, the address of that website.</li>
            </ul>
            <p>We use this information to help us make our site more useful to visitors – to learn about the number of visitors to our site and the types of technology our visitors use.</p>
            {/* List out additional privacy policy stuff*/}
            <h3>Authentication</h3>
            <br/>
            <h4>Account Creation</h4>
            <p><b>Username:</b> When you sign-up for new a profile, it is required that you create a unique username for your account. This username will be public and will be displayed to other users.</p>
            <p><b>Password:</b> When creating a profile, it is required that you create a unique password for your account. This password will be secret information known only to the server. This information is hidden from our admins. In addition the password will be encrypted and securely stored only on our servers. There will be no functionally to share your account's password with anyone even if requested by the user. </p>
            <h4>Profile Information</h4>
            <p>When creating a profile you have the option to provide the following additional information about yourself:</p>
            <ul>
                <li>Age</li>
                <li>Gender</li>
                <li>Ethnicity</li>
                <li>What role you occupy within the GGC community (Student, Faculty ect..)</li>
            </ul>
            <p>This information is optional and hidden from public view as long as you don’t opt in to share this information. </p>
            <p>This information will collected and used for analytics for the purpose of improving both the functionality of the site and the user experience.</p>
            <h4>Sign-In Session</h4>
            <p>When signed in the following information about your account will be tracked:</p>
            <ul>
                <li>The number of times your account signs in</li>
                <li>Any videos on the GGC Walking Trails App that you view while signed in</li>
                <li>Videos you liked</li>
                <li>Videos you disliked</li>
            </ul>
            <h3>Interactive Map</h3>
            <p>In order for all features of the TrailsApp to function, the following information will be requested:</p>
            <ul>
                <li>Device's location tracking service</li>
            </ul>
            <p>This information will be used to track your movement around the trails allowing the app to keep track of the distance you have traveled.</p>
        </section>
    );
};

export default Privacy;