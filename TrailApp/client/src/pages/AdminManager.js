// Import React components
//import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUserRole } from '../actions/users';
import { fetchUserById } from '../api/index.js';

// Import components
//import { getUsers, updateUserRole } from '../../../actions/users';

// Import global stylesheet
import '../interfaceSettings.css';
import { useState } from "react";
import { fetchUsers } from '../api/index.js';
import {useRef} from 'react';

// README: 
const AdminManager = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleCheckboxChange = (userId, isChecked) => {
        dispatch(updateUserRole(userId, {role: isChecked ? 'admin' : 'user'}));
        console.log(users);
        //click on checkbox
        //update db
        //refresh page
        //checkbox? ==> dispatch 
        };

    const Rolecheckbox = ({ checked, onChange }) => {
        return (
            /*
            <input class="form-check-input" type="checkbox" value="Admin" id="RoleCheckbox"
                          color="secondary"
              checked={checked}
              onChange={(e) => onChange(e.target.checked)}
            >*/
            <select class="form-control" type="checkbox" value="Admin" id="RoleCheckbox"
            color="secondary"
              checked={checked}
              onChange={(e) => onChange(e.target.checked)}>
                
            <label className="input-label" for="selectRole">Assign Admin Privileges</label>
                <option>User Role</option>
                <option>Admin Role</option>
            </select>
            
        );
    }

    const Checkbox = ({ label }) => {
        const [isChecked, setIsChecked ] = useState(false); 
        return (
                <input className="p-4" type="checkbox" checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}/>

        );
    }

    
    const emailRef = useRef(null);
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
    
        console.log('email 👉️', emailRef.current.value);
    
        setMessage(
          `${emailRef.current.value}`,
        );
    
        event.target.reset();
      };
    

    const Emailselector = () => {    

        return (
          <div>
            <form onSubmit={handleSubmit}>
            <div class="form-group">
            <label className="input-label" for="exampleInputEmail1">Email Address</label>
              <input
                class="form-control"
                ref={emailRef}
                id="email_select"
                name="email_select"
                type="text"
                placeholder="Email"
              />
              <small id="emailHelp" class="form-text text-muted">Must enter a valid user email registered in our database.</small>

              <br />
              </div>      
              <button type="submit" class="btn btn-primary btn-responsive btn-block mt-4">Select Profile</button>
      
              
            </form>
          </div>
        );
    };

    const Displayprofileinformation = () => {
        
        return(
            <div>
                <h2>Profile Information</h2>
                <p className="lead">Current selected profile: <b>{message}</b>
                </p>
                <h3>User Roles:</h3>
                <div className="container">
                    <p className='lead'>{<Checkbox label="User" />} User</p>
                    <p className='lead'>{<Checkbox label="Admin"/>} Admin</p>
                </div>
                {/*
                <select class="form-control" id="exampleFormControlSelect1">
                <label className="input-label" for="exampleInputEmail1">Assign Admin Privileges</label>
                    <option>User Role</option>
                    <option>Admin Role</option>
                </select>*/}
                <button type="submit" class="btn btn-primary btn-responsive btn-block mt-4">Update Profile</button>

            </div>
        )
    }

    const Updateprofile = () => {
        //get user by email

        //update user role by id
    }


    return (
        <div className="container-xl">
        <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 p-3">
            <h2>Admin Management Portal</h2>
            <p className="lead my-4">Here you will be able to change a registered user's role! Just fill out the form below.</p>
            {/* Insert input form that takes in user email & searches for them in database to update their roleType */}
            {/* Reuse code from oldDirectory/admin/AdminPrivilege*/}

            {<Emailselector />}
            <hr />
            {<Displayprofileinformation />}
            <hr />
                <p className="lead my-4">Here you will be able to upload, delete, and update videos! Just fill out the form below.</p>
                {/* Insert input form that takes in video URL &/or file and updates the database */}
                <form>
                <label for="uploadVideoFile" class="form-label">Upload Video URL &/or file</label>
                <input class="form-control" type="file" id="uploadVideoFile" multiple />
                <button type="submit" class="btn btn-primary btn-responsive btn-block mt-4">Submit</button>
                </form>
            
            </div>
            </div>
            </div>

        </div>
    )
}

export default AdminManager;