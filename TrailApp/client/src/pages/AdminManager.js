// Import React components
//import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUserRole } from '../actions/users';

// Import components
//import { getUsers, updateUserRole } from '../../../actions/users';

// Import global stylesheet
import '../interfaceSettings.css';
import { useState } from "react";
import { fetchUsers } from '../api/index.js';

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
            <div className='checkbox-wrapper'>
                <p>{getUsers()}</p>
                <label>
                    <input type="checkbox" checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}/>
                    <span>{label}</span>
                </label>
                <p>{isChecked ? "Selected" : "Unchecked"}</p>
            </div>
        );
    } 

    

    const Testbox = () => {
        return (
            <div>
                <p>Pilchmore</p>
                <Checkbox label="User" />
                <Checkbox label="Admin"/>
            </div>
        );
    }


    return (
     <section id="AdminManager" className="container mt-5">
        <div className="container-xl">
        <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12 p-3">
            <h2>Admin Management Portal</h2>
            <p className="lead my-4">Here you will be able to change a registered user's role! Just fill out the form below.</p>
            {/* Insert input form that takes in user email & searches for them in database to update their roleType */}
            {/* Reuse code from oldDirectory/admin/AdminPrivilege*/}

           
                <form>
                <div class="form-group">
                    <label className="input-label" for="exampleInputEmail1">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">Must enter a valid user email registered in our database.</small>
                </div>

                <p className="lead mt-4 input-label">Assign Admin Privileges</p>
                <div class ="form-group">
                <p>The</p>
                {<Testbox />}
                {users && users.map((user) => (
                <Rolecheckbox
                    checked={user.role === 'admin'}
                    onChange={(isChecked) =>
                    handleCheckboxChange(user._id, isChecked)
                    }
                />
                ))}
                </div>

                {/*
                <select class="form-control" id="exampleFormControlSelect1">
                <label className="input-label" for="exampleInputEmail1">Assign Admin Privileges</label>
                    <option>User Role</option>
                    <option>Admin Role</option>
                </select>
                */}
                <br></br>
                <br></br>
                <button type="submit" class="btn btn-primary btn-responsive btn-block mt-4">Submit</button>
            
                <hr />
                </form>
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
        </section>
    )
}

export default AdminManager;