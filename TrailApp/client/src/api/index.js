
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signUp = (formData) => API.post('/api/user/signup', formData);
export const signIn = (formData) => API.post('/api/user/signin', formData);
export const logOut = (token) => API.post('/api/user/logout', token);

// TODO: Integrate with pages & test for functionality
export const updateUserRole = (id, roleType) => API.patch(`/api/user/updateRole/${id}`, roleType);
export const updateProfile = (id, formData) => API.patch(`/api/user/updateProfile/${id}`, formData);
export const deleteUser = (id) => API.delete(`/api/user/${id}`);
export const fetchUsers = () => API.get('/api/user/users');
export const fetchUser = (id) => API.get(`/api/user/${id}`)
export const googleLogin = (token) => API.post('/api/user/googleLogin', token);

// README: May not need. Keep anyway for now.
export const fetchTrails = () => API.get('/trails');
export const createTrail = (newTrail) => API.post('/trails', newTrail);
export const updateTrail = (id, updatedTrail) => API.patch(`/trails/${id}`, updatedTrail);
export const deleteTrail = (id) => API.delete(`/trails/${id}`);

export const fetchMarkers = () => API.get('/marker');
export const createMarker = (newMarker) => API.post('/marker', newMarker);
export const updateMarker = (id, updatedMarker) => API.patch(`/marker/${id}`, updatedMarker);
export const deleteMarker = (id) => API.delete(`/marker/${id}`);

// TODO: Need to be tested and API functions need to be created server side
export const fetchVideos = () => API.get('/api/video/videos');
export const postVideo = (videoData) => API.post('/api/video/upload', videoData);
export const updateVideo = (id, videoData) => API.patch(`/api/video/${id}`, videoData);
export const addLike = (id, like) => API.patch(`/api/video/like/${id}`, like);
export const addDislike = (id, dislike) => API.patch(`/api/video/dislike/${id}`, dislike);
export const deleteVideo = (id) => API.delete(`/api/video/${id}`);
export const incrementViewCount = (id) => API.patch(`/api/video/view/${id}`);

