// Import React components
import React, { useState, useEffect, useRef } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

// Import components
import Profilecontrolpanel from '../components/Admin/Profilecontrolpanel';
import Videocontrolpanel from '../components/Admin/Videocontrolpanel';

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

    const [selectedOption, setSelectedOption] = useState('profiles');

    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };

  
    return (
      <div className="container-xl" style={{ background: '#ffffff' }}>
      <div className="container my-4">
          {/*Sidepane*/}
          <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', borderRight: '1px solid #ddd', padding: '10px' }}>
        <h2>Sidebar</h2>
        <button className="btn btn-secondary btn-responsive btn-block" onClick={() => handleOptionChange('profiles')}>User Manager</button>
        <button className="btn btn-secondary btn-responsive btn-block" onClick={() => handleOptionChange('videos')}>Video Manager</button>
      </div>
      <div style={{ padding: '10px', flex: 1 }}>
        {selectedOption === 'profiles' ? (
          <div>
              <Profilecontrolpanel />
          </div>
        ) : (
          <div>
              <Videocontrolpanel />
          </div>
        )}
      </div>
    </div>
          
          
          
          
          
          {/* Insert input form that takes in user email & searches for them in database to update their roleType */}
          {/* Reuse code from oldDirectory/admin/AdminPrivilege*
          <SidebarWithTables />
          <Profilecontrolpanel />
       
          <hr />
          <Videocomponent />
/}
          
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