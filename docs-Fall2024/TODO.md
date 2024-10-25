### TODO LIST

These are all the tasks that must be completed:

##### SERVER

- (Priority: High) Rename/Fix all API routes
- (Priority: High) Create/Modify schemas to track user's watched videos, likes/dislikes, # of times logged in
- (Priority: High) Test ability to properly update total views, total likes, total dislikes
- (Priority: High) Add & test login counter

##### CLIENT

User Interface/User Experience
- (Priority: High) Add page elements to conform with UI requirements and improve mobile user experience
    -> GoldTrail.js | GrayTrail.js | GreenTrail.js
    -> AdminControlPanel.js | AdminAnalytics.js
- (Priority: High) Add and test functionality of buttons for "Delete Profile" & "Submit" 
    -> UserControlPanel.js
- (Priority: High) When deleting profile, open form that prompts user to type in their username and current password & confirm deletion. 
    -> UserControlPanel.js
- (Priority: High) Create table to view, edit, delete videos. Have columns for title, category (dropdown select box), subcategory (dropdown select box), url, toggle listing/delisting, delete button. Also create "Add Video" button at top of form, with form with these categories in same format.
    -> AdminControlPanel.js
- (Priority: High) Create table to view & edit role for all registered users. Have columns for username, email, roleType (dropdown select box)
    -> AdminControlPanel.js
- (Priority: High) Create modular forms for password reset purposes: one for sending email with link to user, another for choosing new password.
- (Priority: High) Create modular form for adding videos. Only 5 input fields (title, url, category, subcategory, listed/nonlisted)
- (Priority: High) Create modular form for profile deletion confirmation. Only 3 input fields (username, password, radio for "Yes I understand my data cannot be recovered.")
- (Priority: High) Create mechanism so password reset form link is sent to user's email when "Forgot Password" is clicked. Create page for that as well, which then navigates to /Authorization.js after password is updated.

Miscellaneous Tasks
- (Priority: Low) Fix Google Maps API connection & replace key -> Trails/
- (Priority: Low) Design API calls & functionality for user/video statistics tracking for admins -> AdminStatistics.js

These are a quick list of the remaining features that need to be implemented:

- Password reset through email
- Ability to add/like videos & track views
- Ability to update user profile information
- Ability to upgrade/downgrade a user's role from administrator portal
- Ability to upload & delete embedded videos to DB