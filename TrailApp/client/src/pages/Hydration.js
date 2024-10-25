// Import React components
import React, { useState } from 'react';

// Import global stylesheet
import '../interfaceSettings.css';

// TODO:
//      Have videos fetched from DB into arrays by category/subcategory & populate page with video cards.
//      Upload any new videos clients have prepared through AdminControlPanel.js or Postman
//      Connect like/dislike button with routing & test functionality. Also add logic to retrieve latest like count, iterate, & send update
//      Figure out way to track views, maybe scrape from Youtube/Google Drive API
// Data for videos
const videos = [
    {
        title: "Stay Hydrated - Tips and Tricks",
        src: "https://drive.google.com/file/d/1_QIxJW7dO5AX7NbPeV01UP7Arhrcm8YO/preview"
    }
];

// Hydration Component
const Hydration = () => {
    const [likeCounts, setLikeCounts] = useState(Array(videos.length).fill(0)); // Track likes for each video
    const [dislikeCounts, setDislikeCounts] = useState(Array(videos.length).fill(0)); // Track dislikes for each video

    // Functions for handling likes
    const handleLike = (index) => {
        const newLikes = [...likeCounts];
        newLikes[index]++;
        setLikeCounts(newLikes);
    };

    // Functions for handling dislikes
    const handleDislike = (index) => {
        const newDislikes = [...dislikeCounts];
        newDislikes[index]++;
        setDislikeCounts(newDislikes);
    };

    return (
        <section id="hydration" className="container mt-5">
            <h1>Hydration</h1>
            <p>Welcome to the Hydration section! Discover the importance of staying hydrated and tips to improve your water intake.</p>

            <div className="row">
                {videos.map((video, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="video-section">
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
                ))}
            </div>
        </section>
    );
};

export default Hydration;
