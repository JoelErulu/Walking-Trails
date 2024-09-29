### TODO LIST

#### September 2024

SERVER
- (Priority: Medium) Figure out how to incorporate JWT for authentication -> userController.js | auth.js |
- (Priority: High) Integrate bcrypt for password salting & security -> userController.js

- (Priority: Least) Figure out how to incorporate OAuth again for authentication -> auth.js | server.js

CLIENT
- (Priority: High) Redesign page layouts to conform with requirements and mobile user experience -> components/Trails/
                                     -> AdminHome.js | AdminManager.js | AdminStatistics.js | UserHome.js | Authorization.js | ProfileManagement.js | Trails.js
- (Priority: High) Add checks for logged-in & roleType -> NavBar/Navbar.js | ProfileManagement.js | pages/
- (Priority: High) Fix Google Maps API connection & replace key -> Trails/
- (Priority: High) Fix logic -> Authorization.js

- (Priority: Low) Remove remaining traces of Google OAuth code -> App.js | Authorization.js
- (Priority: Low) Complete pages -> About.js | Privacy.js
- (Priority: Low) Implement statistics tracking for admins -> AdminStatistics.js