import React, { useState } from 'react';
import '../interfaceSettings.css';

// TODO:
//      Have videos fetched from DB into arrays by category/subcategory & populate page with video cards.
//      Upload any new videos clients have prepared through AdminControlPanel.js or Postman
//      Connect like/dislike button with routing & test functionality. Also add logic to retrieve latest like count, iterate, & send update
//      Figure out way to track views, maybe scrape from Youtube/Google Drive API
const Nutrition = () => {
    const [likeCounts, setLikeCounts] = useState([0, 0, 0]);
    const [dislikeCounts, setDislikeCounts] = useState([0, 0, 0]);

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
            title: "Honest Day Of Eating For GGC Student",
            description: "Healthy Eating Tips",
            src: "https://drive.google.com/file/d/1DhzJIYJN1YmQaiWULntxtp3J5gq0bShq/preview",
        },
        {
            title: "Breakfast",
            description: "Meal Plans",
            src: "https://drive.google.com/file/d/18dbLq9kOFp6ObfkAFWKBIjPQm7Dv1JXl/preview",
        },
        {
            title: "Healthy Snacks for Students",
            description: "Healthy Snacks",
            src: "https://drive.google.com/file/d/1y8wnbAXH0IAl7APnoaeeP10LyY-6rPCZ/preview",
        },
    ];

    return (
        <section id="nutrition" className="container mt-5">
            <h1>Nutrition</h1>
            <p>
                Welcome to the Nutrition section! Here you will find information about healthy eating, meal plans, and nutrition tips.
            </p>

            <div className="row">
                {videos.map((video, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{video.description}</h2>
                                <p className="card-text">{video.title}</p>
                                <div className="video-section mb-4">
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Nutrition;
