// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

// README: Proposal for redesign, where all videos appear in YouTube-style grid, but they have different subcategories and can be filtered by checkboxes
const Nutrition = () => {
    const [likeCounts, setLikeCounts] = useState([0, 0, 0]); // Track likes for three videos
    const [dislikeCounts, setDislikeCounts] = useState([0, 0, 0]); // Track dislikes for three videos

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
    <div className="video-section mb-4">
        <h3>Honest Day Of Eating For GGC Student</h3>
        <div className="ratio ratio-16x9">
            <iframe
                src="https://drive.google.com/file/d/1DhzJIYJN1YmQaiWULntxtp3J5gq0bShq/preview"
                title="Healthy Eating Tips - Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="feedback mt-2">
            <button className="btn btn-outline-success" onClick={() => handleLike(0)}>👍 {likeCounts[0]}</button>
            <button className="btn btn-outline-danger" onClick={() => handleDislike(0)}>👎 {dislikeCounts[0]}</button>
        </div>
    </div>

    {/* Video 2 */}
    <div className="video-section mb-4">
        <h3>Breakfast</h3>
        <div className="ratio ratio-16x9">
            <iframe
                src="https://drive.google.com/file/d/18dbLq9kOFp6ObfkAFWKBIjPQm7Dv1JXl/preview"
                title="Meal Plans - Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="feedback mt-2">
            <button className="btn btn-outline-success" onClick={() => handleLike(1)}>👍 {likeCounts[1]}</button>
            <button className="btn btn-outline-danger" onClick={() => handleDislike(1)}>👎 {dislikeCounts[1]}</button>
        </div>
    </div>

    {/* Video 3 */}
    <div className="video-section mb-4">
        <h3>Healthy Snacks for Students</h3>
        <div className="ratio ratio-16x9">
            <iframe
                src="https://drive.google.com/file/d/1y8wnbAXH0IAl7APnoaeeP10LyY-6rPCZ/preview"
                title="Healthy Snacks - Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="feedback mt-2">
            <button className="btn btn-outline-success" onClick={() => handleLike(2)}>👍 {likeCounts[2]}</button>
            <button className="btn btn-outline-danger" onClick={() => handleDislike(2)}>👎 {dislikeCounts[2]}</button>
        </div>
    </div>
</section>

    );
};

export default Nutrition;
