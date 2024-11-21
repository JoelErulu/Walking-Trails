// Import React components
import React, { useState, useEffect, useRef } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

// Import components
import * as api from '../../api/index.js';
import {Form, InputGroup} from 'react-bootstrap';
import { deleteVideo } from '../../actions/videos.js';
import { useDispatch } from 'react-redux';


// Import global stylesheet
import '../../interfaceSettings.css';




/*const videos = getVideos();

const [videoFiles, setVideoFiles] = useState([]);

const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to an array
    setVideoFiles(prevFiles => [...prevFiles, ...files]); // Add new files to the existing array
};

const handleVideoSubmit = (event) => {
    event.preventDefault();

    //console.log('Uploaded Video Files:', videos);
};


const Videocomponent = () => {
    return(
    <div>
        <p className="lead my-4">Here you will be able to upload, delete, and update videos! Just fill out the form below.</p>
        <form onSubmit={handleVideoSubmit}>
            <input
            type="file"
            className="form-control"
            accept="video/*"
            multiple
            onChange={handleFileChange}
            />
            <br />
            <button type="submit" className="btn btn-primary btn-responsive btn-block">Upload Videos</button>
        </form>
        <br />
        <h3>Uploaded Videos:</h3>
        <ul>
            {videoFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
            ))}
        </ul>

     </div>
    );
}*/


const Videocontrolpanel = () => {

    const [likeCounts, setLikeCounts] = useState([]);
    const [dislikeCounts, setDislikeCounts] = useState([]);

    const [videos, setVideos] = useState([]); // State to hold fetched videos
    const [loading, setLoading] = useState(true); // Loading state

    const dispatch = useDispatch();


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

    const handleSubmit = (event) => {

      };




    // Function to handle delete button click
    const handleDeleteButton = async (video) => {
        // Show confirmation alert
        const confirmDelete = window.confirm(`Are you sure you want to delete: ${video.title}?`);
        if (confirmDelete) {
        // If user confirms, filter out the item from the array
        try {
            console.log("handleDeleteButton Called.");
            dispatch(deleteVideo(video._id));
            alert(`${video.title} was deleted.`);
        } catch (error) {
            console.error('Error deleting video:', error);
        }     
        }
    };    

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const filteredVideos = videos.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
    return (
        <div className="container col-lg-12 col-md-12 p-3 pb-3 text-center card shadow-sm">

            <div className="col-lg-10" style={{ display: 'flex', alignItems: 'center' }}>
            {/*<Videocomponent />*/}
            </div>

            <div className="col-lg-12 search-bar" style={{ display: 'flex', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputGroup.Text id="bg-body-tertiary justify-content-between basic-addon1">🔎</InputGroup.Text>
                <Form.Control
                   type="video"
                   className="input-field"
                   value={searchTerm}
                   onChange={handleSearchChange}
                   placeholder="Search Videos"
                   required
                   style={{ marginRight: '8px' }}
                />
            </InputGroup>
            </form>
            
            </div>
            <hr />
            <table class="table table-hover table-responsive table-wrapper">
            <thead>
            <tr>
                <th>Video</th>
                <th>Video Title</th>
                <th>Category</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {/*Displays Profile in Row */}
            {
            filteredVideos.length > 0 ? (
            filteredVideos.map((e, index) => (
                <tr key={index}>
                    <td>
                    <iframe
                        src={e.url} // Use the url property for the iframe
                        title={e.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </td>
                    <td>{e.title}</td>
                    <td>{e.category}</td>
                    <td>{e.totLikes}</td>
                    <td>{e.totDislikes}</td>
                    <td><button onClick={() => handleDeleteButton(e)} className='btn btn-secondary btn-responsive btn-block'>Delete</button></td>
                </tr>
            ))
            ) : (
            <tr>
            <td colSpan="6" style={{ textAlign: 'center', padding: '8px' }}>
                No results found
            </td>
            </tr>
        )
        }
        </tbody>
        </table>             
      </div>
    );
}

export default Videocontrolpanel;