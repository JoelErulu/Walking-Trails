// Import React components
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import components
import { getUsers, updateUserRole } from '../actions/users';
import { getVideos, postVideo, deleteVideo, updateVideo } from '../actions/videos';
import ProfileControlPanel from '../components/Admin/Profilecontrolpanel';

// Import global stylesheet
import '../interfaceSettings.css';

// TODO:
//       Utilize Bootstrap components for mobile friendly design
//
//       Create table to view, edit, delete all videos
//       COLUMNS: title, category (dropdown select box), subcategory (dropdown select box), url, toggle listing/delisting, delete button
//       Create "Add Video" button at top of form, with form with these categories in same format
//
//       Create table to view & edit role for all registered users
//       COLUMNS: username, email, roleType (dropdown select box)
//       Manual Testing: Make sure everything is routed correctly & validated
const AdminControlPanel = () => {

    const videos = getVideos();

    const [videoFiles, setVideoFiles] = useState([]);
    
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to an array
        setVideoFiles(prevFiles => [...prevFiles, ...files]); // Add new files to the existing array
    };

    const handleVideoSubmit = (event) => {
        event.preventDefault();

        console.log('Uploaded Video Files:', videos);
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
    }
  
    return (
          <div className="container-xl" style={{ background: '#ffffff' }}>
          <div className="container my-4">
          {/*Sidepane*/}
          {/* Insert input form that takes in user email & searches for them in database to update their roleType */}
          {/* Reuse code from oldDirectory/admin/AdminPrivilege*/}

          <ProfileControlPanel />
       
          <hr />
          <Videocomponent />

          
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
      </div>
    );
}

export default AdminControlPanel;