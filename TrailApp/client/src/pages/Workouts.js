// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

const Workouts = () => {
    const [likeCounts, setLikeCounts] = useState([0, 0]); // Track likes for two videos
    const [dislikeCounts, setDislikeCounts] = useState([0, 0]); // Track dislikes for two videos

    // Handler for thumbs up
    const handleLike = (index) => {
        const newLikes = [...likeCounts];
        newLikes[index]++;
        setLikeCounts(newLikes);
    };

    // Handler for thumbs down
    const handleDislike = (index) => {
        const newDislikes = [...dislikeCounts];
        newDislikes[index]++;
        setDislikeCounts(newDislikes);
    };

    return (
        <section id="workouts" className="container mt-5">
            <h1>Personalized Workouts</h1>
            <p>Welcome to the Personalized Workouts section! Enjoy strengthening exercises.</p>

            {/* Video 1 */}
            <div className="video-section">
                <h3>Strengthening Exercise 1</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xTUmZcxf_tI"
                    title="Strengthening Exercise 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="feedback">
                    <button onClick={() => handleLike(0)}>👍 {likeCounts[0]}</button>
                    <button onClick={() => handleDislike(0)}>👎 {dislikeCounts[0]}</button>
                </div>
            </div>

            {/* Video 2 */}
            <div className="video-section">
                <h3>Strengthening Exercise 2</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/IR0yV_3DfBo"
                    title="Strengthening Exercise 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="feedback">
                    <button onClick={() => handleLike(1)}>👍 {likeCounts[1]}</button>
                    <button onClick={() => handleDislike(1)}>👎 {dislikeCounts[1]}</button>
                </div>
            </div>
        </section>
    );
};

export default Workouts;
    