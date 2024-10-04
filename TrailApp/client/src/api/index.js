import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signUp = (formData) => API.post('/api/user/signup', formData);
// TODO: Integrate with pages & test for functionality
export const updateUserRole = (id, role) => API.patch(`/api/user/${id}`, role);
export const updateProfile = (id, formData) => API.patch(`/api/user/${id}`, formData);
export const signIn = (formData) => API.post('/api/user/signin', formData);
export const logOut = (token) => API.post('/api/user/logout', token);
export const fetchUsers = () => API.get('/api/user/users');
export const googleLogin = (token) => API.post('/api/user/googleLogin', token);

export const fetchTrails = () => API.get('/trails');
export const createTrail = (newTrail) => API.post('/trails', newTrail);
export const updateTrail = (id, updatedTrail) => API.patch(`/trails/${id}`, updatedTrail);
export const deleteTrail = (id) => API.delete(`/trails/${id}`);

export const fetchMarkers = () => API.get('/marker');
export const createMarker = (newMarker) => API.post('/marker', newMarker);
export const updateMarker = (id, updatedMarker) => API.patch(`/marker/${id}`, updatedMarker);
export const deleteMarker = (id) => API.delete(`/marker/${id}`);