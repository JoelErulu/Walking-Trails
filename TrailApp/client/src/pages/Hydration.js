// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

const Hydration = () => {
    const [likeCount, setLikeCount] = useState(0); // Track likes for the video
    const [dislikeCount, setDislikeCount] = useState(0); // Track dislikes for the video

    // Handler for thumbs up
    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    // Handler for thumbs down
    const handleDislike = () => {
        setDislikeCount(dislikeCount + 1);
    };

    return (
        <section id="hydration" className="container mt-5">
            <h1>Hydration</h1>
            <p>Welcome to the Hydration section! Discover the importance of staying hydrated and tips to improve your water intake.</p>

            {/* Video */}
            <div className="video-section">
                <h3>Stay Hydrated - Tips and Tricks</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/2iccTWJ2dmU" 
                    title="Stay Hydrated - Tips and Tricks"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="feedback">
                    <button onClick={handleLike}>👍 {likeCount}</button>
                    <button onClick={handleDislike}>👎 {dislikeCount}</button>
                </div>
            </div>
        </section>
    );
};

export default Hydration;