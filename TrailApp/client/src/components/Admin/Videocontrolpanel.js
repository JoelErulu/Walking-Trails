// Import React components
import React, { useState, useEffect, useRef } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

// Import components
import * as api from '../../api/index.js';

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


    const handleButtonClick = (username, email) => {
        alert(`Username: ${username}\nEmail: ${email}`);
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

        <h1 style={{ display: 'flex', alignItems: 'left' }}>Profile Manager</h1>

            <div className="col-lg-10" style={{ display: 'flex', alignItems: 'center' }}>
            {/*<Videocomponent />*/}
            </div>

            <div className="col-lg-10" style={{ display: 'flex', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="video"
                    className="input-field"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search Videos"
                    required
                    style={{ marginRight: '8px' }}
                />
                <button type="submit" className='btn btn-secondary btn-responsive btn-block'>Search Videos</button>
            </form>
            </div>
            <hr />

            <h1 style={{ display: 'flex', alignItems: 'left' }}>Video Manager</h1>
            

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
                    <td><button onClick={() => handleButtonClick(e.username, e.email)} className='btn btn-secondary btn-responsive btn-block'>Action</button></td>
                </tr>
            ))
            ) : (
            <tr>
            <td colSpan="2" style={{ textAlign: 'center', padding: '8px' }}>
                No results found
            </td>
            </tr>
        )
        }
        </tbody>
        </table>    
          {
          /*
          {users.map((e, index) => (
              <div key={index}>
                  <span>{e.username}</span><br />
                  <span>{e.email}</span><br />
              </div>
          ))}
          */
          }
          
      </div>
    );
}

export default Videocontrolpanel;