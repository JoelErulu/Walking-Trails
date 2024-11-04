# WalkingTrailApp

### Semester
Fall 2024

© Walking Trails, Fall 2024

### Team Name

YoungThugs

### Project Name

Walking Trail 

### Team Members
1. Ginette Wilson Bahun😊
2. Mathews Binny 🙀
3. Joel Erulu
4. Josiah Haines

### Repository Location URL:

[Repo URL](https://github.com/GGC-SD/WalkingTrailApp.git)

### Progress Tracking Tool and URL

Jira

### Secondary Communication Tool

Discord

### Team Roles

**Fall 2024**
1.   Joel Erulu - *Lead Programmer/Team Manager*
2.   Josiah Haines - *Code Architect/Documentation Lead*
3.   Ginette Wilson Bahun - *Lead UI/UX design & Client liaison*😊
4.   Mathews Binny - *Lead Data Modeler & Testing Lead*

Run app Spring 2023: [Walking App, Spring 2023 version](https://ggctrail.onrender.com/)

### Description

The Walking Trails App is a mobile application designed to enhance the walking experience on Georgia Gwinnett College (GGC) trails through interactive and educational content focused on fitness, health, and wellness. The app is accessible via QR codes placed on signs along the trails. By scanning a QR code, users are directed to the app, where they can access instructional videos, trail maps, exercise guides, and nutrition information, among other features. On the App users currently have the ability to register, sign in, edit their profiles, and view the different trails and videos. We are currently  implementing user feedback options for videos (like/dislike), collection of user statistics, and administrator functionalities regarding media management, as well as video retrieval based on category/subcategory.

### Technologies

- MongoDB
  https://www.mongodb.com/
- Express
  https://expressjs.com/
- Node
  https://nodejs.org/en/
- React
  https://reactjs.org/
- Google Maps API
- https://developers.google.com/maps
- (IMPORTANT)
- The Google Maps API needs key access from Google through paid access.
  Either a renewal of a access is needed or use a new Google account to obtain another key through free trial for the map to work.

### Installation Steps

--- Clone the Repository on your computer using the command https://github.com/GGC-SD/WalkingTrail-Fall24.git

\*\*\* Add --force at the end of the npm command when encountered with errors

1. Open the terminal
2. Move to the "client" directory (cd C:/../WalkingTrailApp/TrailApp/client)
3. Run 'npm install' for automatic installation of project dependencies. Run 'npm update' to update them to latest versions, but be aware - some things might be out-of-date & deprecated with no replacements.
   
   Alternatively, enter the following commands:
   npm i @react-oauth/google
   npm i axios
   npm i bootstrap
   npm i jwt-decode
   npm i react
   npm i react-bootstrap
   npm i react-dom
   npm i react-redux
   npm i react-router-dom
   npm i react-scripts
   npm i redux
   npm i redux-thunk
   npm i --legacy-peer-deps
   npm i -S @react-google-maps/api
   npm install react-bootstrap bootstrap

5. Move to the "server" directory (cd C:/../WalkingTrailApp/TrailApp/server)
6. Run 'npm install' for automatic installation of project dependencies. Run 'npm update' to update them to latest versions, but be aware - some things might be out-of-date & deprecated with no replacements.
   
   Alternatively, enter the following commands: 
   npm i bcrypt
   npm i body-parser  
   npm i cors 
   npm i dotenv 
   npm i express  
   npm i jsonwebtoken  
   npm i mongoose  
   npm i nodemon
   npm i google-auth-library
   npm install bcrypt

### How to Run

1. Move to the "client" directory inside of the TrailApp foler
2. Enter "npm start" in the terminal
3. Move to the "server" directory inside of the TrailApp foler
4. Enter "npm start" in the terminal

### List of working features

1. Authentication - Create an account, store credentials in Mongoose, and access user-specific data. Log in to existing accounts.
2. Interactive Map - markers that contain content
3. Admin view - Admin can assign privleges, create content, update content, delete content.
4. Video retrieval - Users can access videos is stored on MongoDB attached to map markers

### Features our team developed

1. User Registration & Authentication: This feature was broken when we first accessed the project. We re-implemented it, and changed the schema to accomodate for new requirements, and tested it to ensure functionality.
2. Custom navbar that generate based on user role. We wanted to lock certain pages so they could only be accessed by users who are signed in, and also for security purposes.
3. Role-based access for all pages. This is great for security, as we wouldn't want non-signed in users to access content they shouldn't be able to see.
4. All new site map. We heavily modified the landing page, and kept only the trails pages from the previous group, with modified UI design.
5. The previous groups had developed video upload and retrieval for markers on the trail maps. However, our new requirements required video galleries and not map-marker based videos. We kept their previous groups work, and implemented our solution in parallel on new pages using embedded links & Google Drive for right now for proof of concept.

### Features in progress

- Password reset through email
- Ability to add/like videos & track views
- Ability to edit user profile information
- Ability to upgrade/downgrade a user's role from administrator portal
- Ability to upload & delete embedded videos to DB

### Link to the demo of the app running

In progress
