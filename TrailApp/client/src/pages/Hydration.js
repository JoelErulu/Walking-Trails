// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

//README: Proposal for redesign, where all videos appear in YouTube-style grid
const Hydration = () => {
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
        <section id="hydration" className="container mt-5">
            <h1>Hydration</h1>
            <p>Welcome to the Hydration section! Discover the importance of staying hydrated and tips to improve your water intake.</p>

            {/* Video */}
            <div className="video-section mb-4">
                <h3>Stay Hydrated - Tips and Tricks</h3>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://drive.google.com/file/d/1_QIxJW7dO5AX7NbPeV01UP7Arhrcm8YO/preview"
                        title="Stay Hydrated - Tips and Tricks"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="feedback mt-2">
                    <button className="btn btn-outline-success" onClick={handleLike}>👍 {likeCount}</button>
                    <button className="btn btn-outline-danger" onClick={handleDislike}>👎 {dislikeCount}</button>
                </div>
            </div>
        </section>
    );
};

export default Hydration;
