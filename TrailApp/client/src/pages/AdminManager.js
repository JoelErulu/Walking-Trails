// Import React components
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import components
import { getUsers, updateUserRole } from '../actions/users';
import { getVideos, postVideo, deleteVideo, updateVideo } from '../actions/videos';

// Import global stylesheet
import '../interfaceSettings.css';

// TODO: Need to have form to handle video CRUD functionalities
// TODO: Need to have form to handle user role management
// TODO: Testing 
const AdminManager = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const videos = getVideos();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    //useEffect(() => {
    //    dispatch(getVideos());
    //}, [dispatch]);

    const handleCheckboxChange = (userId, isChecked) => {
        console.log(userId);
        dispatch(updateUserRole(userId, {role: isChecked ? 'admin' : 'user'}));
        console.log(users);
        //click on checkbox
        //update db
        //refresh page
        //checkbox? ==> dispatch 
        };

    
    const emailRef = useRef(null);
    const [message, setMessage] = useState('');


    const [inputEmail, setInputEmail] = useState('');
    const [matchedProfile, setMatchedProfile] = useState(null);
   
    const handleInputChange = (event) => {
      setInputEmail(event.target.value);
    };
 
    const handleSubmit = (event) => {
      event.preventDefault();
      const targetProfile = users.find(profile => profile.email === inputEmail);
      
      if (targetProfile) {
        setMatchedProfile(targetProfile); // Set the matched profile to state
        console.log('Matched Profile:', targetProfile);
      } else {
        setMatchedProfile(null); // Clear the matched profile if no match is found
        console.log('No matching profile found.');
      }
    };

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
        <div className="container-xl justify-content-center">
        <div className="container justify-content-center">
        <div className="d-flex row justify-content-center">
        <div className="col-lg-6 col-md-12 p-3">
            <h2>Admin Management Portal</h2>
            <p className="lead my-4">Here you will be able to change a registered user's role! Just fill out the form below.</p>
            {/* Insert input form that takes in user email & searches for them in database to update their roleType */}
            {/* Reuse code from oldDirectory/admin/AdminPrivilege*/}

        <h1>Email Search</h1>
        <label className="input-label" htmlFor="exampleInputEmail1">Email Address:</label>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            value={inputEmail}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        <small id="emailHelp" className="form-text text-muted">Must enter a valid user email registered in our database.</small>

          <button type="submit" className='btn btn-primary btn-responsive btn-block mt-4'>Check Email</button>
        </form>
        {matchedProfile && (
        <div>
          <hr />
          <h2>Profile Information:</h2>
          <p className="lead">Matching Profile: <b>{message}</b></p>
          <p className="lead">UserName: {matchedProfile.username}</p>
          <p className="lead">Id: {matchedProfile._id}</p>
          <p className="lead">Email: {matchedProfile.email}</p>
          <p className="lead">Password: ************ </p>
          <p className="lead">Gender: {matchedProfile.gender}</p>
          <p className="lead">Age: {matchedProfile.age}</p>
          <p className="lead">Ethnicity: {matchedProfile.ethnicity}</p>
          <p className="lead">Community: {matchedProfile.community}</p>
          <p className="lead">Date Created: {matchedProfile.createdAt}</p>
          <p className="lead">Role: {matchedProfile.roleType}</p>
          <label className="lead">
              <input 
                type="checkbox"
                checked={matchedProfile.roleType === 'admin'}
                onChange={(isChecked) =>
                    handleCheckboxChange(matchedProfile._id, isChecked)
                  }
              />
              {" "}Admin
            </label>
            <br />
        </div>
        )}
        {!matchedProfile && inputEmail && (
            <p>No matching profile found.</p>
            )}

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
            </div>

        </div>
    );


}

export default AdminManager;