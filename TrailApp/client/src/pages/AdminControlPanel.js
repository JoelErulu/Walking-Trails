// Import React components
import React, { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

// Import components
import Profilecontrolpanel from '../components/Admin/Profilecontrolpanel';
import Videocontrolpanel from '../components/Admin/Videocontrolpanel';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';


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
      <div className="container-xl bg-white">
        
        <div className="row my-4">
          {/* Sidepane */}
          <div className="col-4 col-md-3 mb-4 mb-md-0 sidebar">
          <hr /> 
          <Navbar className="bg-body-tertiary">
            <Container>
            <Nav.Link className="hover" onClick={() => handleOptionChange('profiles')}>👤 Profile Manager</Nav.Link>
            </Container>
          </Navbar>
          <br />
          <Navbar className="bg-body-tertiary">
              <Container>
              <Nav.Link className="hover" onClick={() => handleOptionChange('videos')}>🎞️ Video Manager</Nav.Link>
              </Container>
          </Navbar>
          <hr />
          </div>
          <div className="col-12 col-md-9 content">
            {selectedOption === 'profiles' ? (
              <Profilecontrolpanel />
            ) : (
              <Videocontrolpanel />
            )}
          </div>
        </div>
      </div>
    );
}

export default AdminControlPanel;
