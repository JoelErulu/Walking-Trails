// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

const Climate = () => {
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
        <section id="climate" className="container mt-5">
            <h1>Climate</h1>
            <p>Welcome to the Climate section! Learn about the effects of climate on fitness and how to adapt your workout to different weather conditions.</p>

            {/* Video */}
            <div className="video-section">
                <h3>How Climate Affects Your Workout</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/eE2F4XLrhyw" 
                    title="How Climate Affects Your Workout"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="feedback">
                    <button onClick={handleLike}>👍 {likeCount}</button>
                    <button onClick={handleDislike}>👎 {dislikeCount}</button>
                </div>
            </div>

            {/* Add more content as needed */}
            {/* Provide short blurb for each heading & link to gallery of videos. 
            Perhaps create a Gallery.js that pulls up a grid of videos, 
            with backend for filtering based on a specific tag reated to particular category
            Video.js that pulls up a video player element when thumbnail selected*/}
        </section>
    );
};

export default Climate;