// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

// TODO:
//      Have videos fetched from DB into arrays by category/subcategory & populate page with video cards.
//      Upload any new videos clients have prepared through AdminControlPanel.js or Postman
//      Connect like/dislike button with routing & test functionality. Also add logic to retrieve latest like count, iterate, & send update
//      Figure out way to track views, maybe scrape from Youtube/Google Drive API
const Climate = () => {
    const [likeCount, setLikeCount] = useState(0); // Track likes for the video
    const [dislikeCount, setDislikeCount] = useState(0); // Track dislikes for the video

    // Functions for like/dislike
    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };
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
        </section>
    );
};

export default Climate;