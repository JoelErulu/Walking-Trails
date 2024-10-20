### TODO LIST

These are all the tasks that must be completed:

##### SERVER

- (Priority: Low) Fix Google OAuth API connection & key -> auth.js | server.js

##### CLIENT

User Interface/User Experience
- (Priority: High) Redesign page layouts to conform with UI requirements and mobile user experience
    -> components/Trails/
    -> AdminManager.js | AdminStatistics.js | ProfileManagement.js | Trails.js
- (Priority: High) Add ability for password reset through email

User Authentication & Role based access
- (Priority: High) Add checks for logged-in & roleType -> pages/
- (Priority: Low) Fix Google OAuth API connection & key

Miscellaneous Tasks
- (Priority: High) Fix Google Maps API connection & replace key -> Trails/
- (Priority: High) Design API calls & functionality for user/video statistics tracking for admins -> AdminStatistics.js

These are a quick list of the remaining features that need to be implemented:

- Password reset through email
- Role based access on pages for security
- Ability to add/like videos & track views
- Ability to update user profile information
- Ability to upgrade/downgrade a user's role from administrator portal
- Ability to upload & delete embedded videos to DB