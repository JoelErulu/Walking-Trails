import React, { useState } from 'react';
import '../interfaceSettings.css';

const Exercises = () => {
    const [likeCounts, setLikeCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    const [dislikeCounts, setDislikeCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

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
        {
            title: "Lateral Lunges",
            description: "Enhance your strength and endurance with these body weight exercises.",
            src: "https://drive.google.com/file/d/122UygVQqNsoPjf652OlMmhGV5kbqOcmr/preview",
        },
        {
            title: "Walking Toe Touches",
            src: "https://drive.google.com/file/d/1Ie68tzhoJUiOUtN5wRQVxw86IDHEgvoz/preview",
        },
        {
            title: "Cross Arm Stretch",
            src: "https://drive.google.com/file/d/14TKTtCWnbVQ7xmfY8HeaiW8ARr96peTh/preview",
        },
        {
            title: "Torso Twist",
            src: "https://drive.google.com/file/d/1llplEK2W_gvYV4zPE8v19m6L4gbmSwS9/preview",
        },
        {
            title: "ACM Recommendations",
            src: "https://drive.google.com/file/d/1uwt_mMxd-Y7PeJj1RQRxV-ccYOROuEMq/preview",
        },
        {
            title: "Estimating Exercise Intensity",
            src: "https://drive.google.com/file/d/14IVZVTixJVqN8QA7YFfy-XQOUY9Nggu-/preview",
        },
        {
            title: "Importance of Shoe Size",
            src: "https://drive.google.com/file/d/1iXfq3bRjAPTyGcLMlmYduF58kdLy5qWu/preview",
        },
    ];

    return (
        <section id="exercises" className="container mt-5">
            <h1>Exercises</h1>
            <p>
                Welcome to the Exercises library! Here we have videos on body weight exercises,
                stretching, injury prevention, and proper walking techniques.
            </p>

            <div className="row">
                {/* Body Weight Exercises */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Body Weight Exercises</h2>
                            <p className="card-text">Enhance your strength and endurance with these body weight exercises.</p>
                            {videos.slice(0, 2).map((video, index) => (
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

                {/* Stretching */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Stretching</h2>
                            <p className="card-text">Improve your flexibility and prevent injuries with these stretching exercises.</p>
                            {videos.slice(2, 4).map((video, index) => (
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
                                        <button className="btn btn-outline-success" onClick={() => handleLike(index + 2)}>👍 {likeCounts[index + 2]}</button>
                                        <button className="btn btn-outline-danger" onClick={() => handleDislike(index + 2)}>👎 {dislikeCounts[index + 2]}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Injury Prevention */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Injury Prevention</h2>
                            <p className="card-text">Techniques to prevent injuries during physical activities.</p>
                            {videos.slice(4, 6).map((video, index) => (
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
                                        <button className="btn btn-outline-success" onClick={() => handleLike(index + 4)}>👍 {likeCounts[index + 4]}</button>
                                        <button className="btn btn-outline-danger" onClick={() => handleDislike(index + 4)}>👎 {dislikeCounts[index + 4]}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Proper Walking Techniques */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Proper Walking Techniques</h2>
                            <p className="card-text">Best practices for walking to enhance your performance.</p>
                            <div className="video-section mb-4">
                                <h3>{videos[6].title}</h3>
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src={videos[6].src}
                                        title={videos[6].title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="feedback mt-2">
                                    <button className="btn btn-outline-success" onClick={() => handleLike(6)}>👍 {likeCounts[6]}</button>
                                    <button className="btn btn-outline-danger" onClick={() => handleDislike(6)}>👎 {dislikeCounts[6]}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exercises;
