import React, { useState, useEffect } from 'react';
import '../interfaceSettings.css';
import * as api from '../api/index.js';

const InjuryPrevention = () => {
    const [likeCounts, setLikeCounts] = useState([]);
    const [dislikeCounts, setDislikeCounts] = useState([]);
    const [videos, setVideos] = useState([]); // State to hold fetched videos
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const { data } = await api.fetchVideos(); // Fetch all videos from the API
                setVideos(data); // Set videos from response
                setLikeCounts(Array(data.length).fill(0)); // Initialize like counts
                setDislikeCounts(Array(data.length).fill(0)); // Initialize dislike counts
            } catch (error) {
                console.error('Error fetching videos:', error);
            } finally {
                setLoading(false); // Set loading to false when done
            }
        };

        fetchVideos(); // Call the function to fetch videos
    }, []);

    const handleLike = (index) => {
        const newLikes = [...likeCounts];
        newLikes[index]++;
        setLikeCounts(newLikes);
        // Add logic here to update the like count on the server if necessary
    };

    const handleDislike = (index) => {
        const newDislikes = [...dislikeCounts];
        newDislikes[index]++;
        setDislikeCounts(newDislikes);
        // Add logic here to update the dislike count on the server if necessary
    };

    const categories = {
        "Injury Prevention": videos.filter(video => video.subCategory === "Injury Prevention"),
    };

    if (loading) {
        return <p>Loading videos...</p>; // Loading state UI
    }

    return (
        <section id="exercises" className="container mt-5">
            <h1>Injury Prevention</h1>
            <p>
            Welcome to the Injury Prevention library! Here, you'll find expert tips and exercises designed to help you minimize the risk of injuries during workouts and physical activities. Strengthen and protect your body with these essential injury prevention techniques.
            </p>

            <div className="row">
                {Object.keys(categories).map((category, catIndex) => (
                    <div className="col-md-6 mb-4" key={catIndex}>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{category}</h2>
                                <p className="card-text">
                                    {category === "Injury Prevention" && "Techniques to prevent injuries during physical activities."}
                                </p>
                                {categories[category].map((video, index) => (
                                    <div className="video-section mb-4" key={video._id}>
                                        <h3>{video.title}</h3>
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                                src={video.url} // Use the url property for the iframe
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        <p>Views: {video.views}</p> {/* Displaying the view count */}
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

export default InjuryPrevention;
