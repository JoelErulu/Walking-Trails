import '../interfaceSettings.css'; // Import the CSS file

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
        </section>
    );
};

export default Privacy;