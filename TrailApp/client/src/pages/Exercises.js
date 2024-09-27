// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

//README: Proposal for redesign, where all videos appear in YouTube-style grid, but they have different tags and can be filtered by checkboxes
const Exercises = () => {
    const [likeCounts, setLikeCounts] = useState([0, 0, 0]); // Track likes for three videos
    const [dislikeCounts, setDislikeCounts] = useState([0, 0, 0]); // Track dislikes for three videos

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
        <section id="exercises" className="container mt-5">
            <h1>Exercises</h1>
            <p>Welcome to the Exercises library! Here we have videos on stretching exercises, strengthening exercises, and walking mechanics.</p>

            {/* Stretching Exercises Video */}
            <div className="video-section">
                <h3>Stretching Exercises</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/i6TzP2COtow" 
                    title="Stretching Exercises"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="feedback">
                    <button onClick={() => handleLike(0)}>👍 {likeCounts[0]}</button>
                    <button onClick={() => handleDislike(0)}>👎 {dislikeCounts[0]}</button>
                </div>
            </div>

            {/* Strengthening Exercises Video */}
            <div className="video-section">
                <h3>Strengthening Exercises</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xTUmZcxf_tI" 
                    title="Strengthening Exercises"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="feedback">
                    <button onClick={() => handleLike(1)}>👍 {likeCounts[1]}</button>
                    <button onClick={() => handleDislike(1)}>👎 {dislikeCounts[1]}</button>
                </div>
            </div>

            {/* Walking Mechanics Video */}
            <div className="video-section">
                <h3>Walking Mechanics</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sEqx4VqC4pI" 
                    title="Walking Mechanics"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="feedback">
                    <button onClick={() => handleLike(2)}>👍 {likeCounts[2]}</button>
                    <button onClick={() => handleDislike(2)}>👎 {dislikeCounts[2]}</button>
                </div>
            </div>
        </section>
    );
};

export default Exercises;