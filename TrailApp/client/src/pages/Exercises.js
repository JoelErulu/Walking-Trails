import React, { useState } from 'react';
import '../interfaceSettings.css';

const Exercises = () => {
    const [likeCounts, setLikeCounts] = useState(Array(7).fill(0)); // Adjust based on number of videos
    const [dislikeCounts, setDislikeCounts] = useState(Array(7).fill(0));

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

    const videos = [
        { title: "Lateral Lunges", description: "Body Weight Exercises", src: "https://drive.google.com/file/d/122UygVQqNsoPjf652OlMmhGV5kbqOcmr/preview" },
        { title: "Walking Toe Touches", description: "Body Weight Exercises", src: "https://drive.google.com/file/d/1Ie68tzhoJUiOUtN5wRQVxw86IDHEgvoz/preview" },
        { title: "Cross Arm Stretch", description: "Stretching", src: "https://drive.google.com/file/d/14TKTtCWnbVQ7xmfY8HeaiW8ARr96peTh/preview" },
        { title: "Torso Twist", description: "Stretching", src: "https://drive.google.com/file/d/1llplEK2W_gvYV4zPE8v19m6L4gbmSwS9/preview" },
        { title: "ACM Recommendations", description: "Injury Prevention", src: "https://drive.google.com/file/d/1uwt_mMxd-Y7PeJj1RQRxV-ccYOROuEMq/preview" },
        { title: "Estimating Exercise Intensity", description: "Injury Prevention", src: "https://drive.google.com/file/d/14IVZVTixJVqN8QA7YFfy-XQOUY9Nggu-/preview" },
        { title: "Importance of Shoe Size", description: "Proper Walking Techniques", src: "https://drive.google.com/file/d/1iXfq3bRjAPTyGcLMlmYduF58kdLy5qWu/preview" },
    ];

    const categories = {
        "Body Weight Exercises": videos.filter(video => video.description === "Body Weight Exercises"),
        "Stretching": videos.filter(video => video.description === "Stretching"),
        "Injury Prevention": videos.filter(video => video.description === "Injury Prevention"),
        "Proper Walking Techniques": videos.filter(video => video.description === "Proper Walking Techniques")
    };

    return (
        <section id="exercises" className="container mt-5">
            <h1>Exercises</h1>
            <p>
                Welcome to the Exercises library! Here we have videos on body weight exercises,
                stretching, injury prevention, and proper walking techniques.
            </p>

            <div className="row">
                {Object.keys(categories).map((category, catIndex) => (
                    <div className="col-md-6 mb-4" key={catIndex}>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{category}</h2>
                                <p className="card-text">
                                    {category === "Body Weight Exercises" && "Enhance your strength and endurance with these body weight exercises."}
                                    {category === "Stretching" && "Improve your flexibility and prevent injuries with these stretching exercises."}
                                    {category === "Injury Prevention" && "Techniques to prevent injuries during physical activities."}
                                    {category === "Proper Walking Techniques" && "Best practices for walking to enhance your performance."}
                                </p>
                                {categories[category].map((video, index) => (
                                    <div className="video-section mb-4" key={index}>
                                        <h3>{video.title}</h3>
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                                src={video.src}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        <div className="feedback mt-2">
                                            <button className="btn btn-outline-success" onClick={() => handleLike(index)}>👍 {likeCounts[index]}</button>
                                            <button className="btn btn-outline-danger" onClick={() => handleDislike(index)}>👎 {dislikeCounts[index]}</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Exercises;
