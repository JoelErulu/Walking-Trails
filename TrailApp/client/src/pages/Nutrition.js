// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

//README: Proposal for redesign, where all videos appear in YouTube-style grid, but they have different subcategory and can be filtered by checkboxes
const Nutrition = () => {
    const [likeCounts, setLikeCounts] = useState([0, 0]); // Track likes for two videos
    const [dislikeCounts, setDislikeCounts] = useState([0, 0]); // Track dislikes for two videos

    // Functions for like/dislike
    const handleLike = (index) => {
        const newLikes = [...likeCounts];
        newLikes[index]++;
        setLikeCounts(newLikes);
    };
    const handleDislike = (index) => {
        const newDislikes = [...dislikeCounts];
        newDislikes[index]++;
        setDislikeCounts(newDislikes);
    };

    return (
        <section id="nutrition" className="container mt-5">
            <h1>Nutrition</h1>
            <p>Welcome to the Nutrition section! Here you will find information about healthy eating, meal plans, and nutrition tips.</p>

            {/* Video 1 */}
            <div className="video-section">
                <h3>Healthy Eating Tips - Video 1</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/c06dTj0v0sM" 
                    title="Healthy Eating Tips - Video 1"
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
                <h3>Meal Plans - Video 2</h3>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9h9S9kD67-Q" 
                    title="Meal Plans - Video 2"
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

export default Nutrition;