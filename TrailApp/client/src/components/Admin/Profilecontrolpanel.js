import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, InputGroup} from 'react-bootstrap';

// Import components
import { getUsers, updateUserRole } from '../../actions/users';


// Import global stylesheet
import '../../interfaceSettings.css';

const Profilecontrolpanel = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

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

    const handleButtonClick = (username, email) => {
        alert(`Username: ${username}\nEmail: ${email}`);
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

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const filteredProfiles = users.filter((profile) =>
        //profile.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.email.toLowerCase().includes(searchTerm.toLowerCase())
      );


    return (
        <div className="container col-lg-12 col-md-12 p-3 pb-3 text-center card shadow-sm">
            {/* Insert input form that takes in user email & searches for them in database to update their roleType */}
            {/* Reuse code from oldDirectory/admin/AdminPrivilege*/}           
            <div className="col-lg-12 search-bar" style={{ display: 'flex', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputGroup.Text id="bg-body-tertiary justify-content-between basic-addon1">🔎</InputGroup.Text>
                <Form.Control
                   type="profile"
                   className="input-field"
                   value={searchTerm}
                   onChange={handleSearchChange}
                   placeholder="Search Profiles"
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
                <th>Username</th>
                <th>Email</th>
                {/*<th>Date Created</th>*/}
                <th>Role</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {/*Displays Profile in Row */}
            {
            filteredProfiles.length > 0 ? (
            filteredProfiles.map((e, index) => (
                <tr key={index}>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    {/*<td>{e.createdAt}</td>*/}
                    <td>{e.roleType}</td>
                    <td><button onClick={() => handleButtonClick(e.username, e.email)} className='btn btn-secondary btn-responsive btn-block'>Action</button></td>
                </tr>
            ))
            ) : (
            <tr>
            <td colSpan="4" style={{ textAlign: 'center', padding: '8px' }}>
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

export default Profilecontrolpanel;