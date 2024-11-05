import React, { useState, useEffect } from 'react';
import * as api from '../api/index.js'; // Ensure the path is correct
import { useDispatch } from 'react-redux'; // Import useDispatch for dispatching actions
import { incrementViewCount, fetchVideos } from '../actions/videos.js'; // Import the increment view count action

const Climate = () => {
    const [videos, setVideos] = useState([]); // State to hold video data
    const [isLoading, setIsLoading] = useState(true); // State for loading indicator
    const [likeCounts, setLikeCounts] = useState({}); // State for like counts
    const [dislikeCounts, setDislikeCounts] = useState({}); // State for dislike counts
    const dispatch = useDispatch(); // Initialize useDispatch

    // Function to fetch videos from the database
    const fetchVideos = async () => {
        try {
            const { data } = await api.fetchVideos(); // Fetch all videos from the API
            const climateVideos = data.filter(video => video.category === "Climate"); // Filter videos by category
            setVideos(climateVideos); // Update state with filtered videos
            setIsLoading(false); // Set loading to false
        } catch (err) {
            console.error(err); // Log any errors
            setIsLoading(false); // Set loading to false even on error
        }
    };

    // Fetch videos when the component mounts
    useEffect(() => {
        fetchVideos();
    }, []);

    // Functions for like/dislike
    const handleLike = (videoId) => {
        setLikeCounts(prevCounts => ({
            ...prevCounts,
            [videoId]: (prevCounts[videoId] || 0) + 1
        }));
        // Optionally, send this update to the backend here
    };

    const handleDislike = (videoId) => {
        setDislikeCounts(prevCounts => ({
            ...prevCounts,
            [videoId]: (prevCounts[videoId] || 0) + 1
        }));
        // Optionally, send this update to the backend here
    };

    // Function to handle viewing a video
    const handleView = async (videoId) => {
        try {
            // Dispatch the action to increment view count
            await dispatch(incrementViewCount(videoId)); // This API should update the view count in your database
            fetchVideos(); // Fetch the videos again if you want to update view counts in UI
        } catch (err) {
            console.error(err); // Log any errors
        }
    };

    return (
        <section id="climate" className="container mt-5">
            <h1>Climate</h1>
            <p>Welcome to the Climate section! Learn about the effects of climate on fitness and how to adapt your workout to different weather conditions.</p>

            <div className="video-section">
                {isLoading ? (
                    <p>Loading videos...</p>
                ) : (
                    videos.length > 0 ? (
                        videos.map(video => (
                            <div key={video._id} className="video-card">
                                <h4>{video.title}</h4>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={video.url} // Ensure this is the correct field from your video object
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    onClick={() => handleView(video._id)} // Call handleView on click
                                ></iframe>
                                <div className="feedback">
                                    <button onClick={() => handleLike(video._id)}>👍 {likeCounts[video._id] || 0}</button>
                                    <button onClick={() => handleDislike(video._id)}>👎 {dislikeCounts[video._id] || 0}</button>
                                    <p>Views: {video.views}</p> {/* Display view count */}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No videos available for this category.</p> // Message when no videos are found
                    )
                )}
            </div>
        </section>
    );
};

export default Climate;
