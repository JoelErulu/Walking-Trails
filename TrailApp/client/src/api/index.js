import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const logout = (token) => API.post('user/logout', token);
export const fetchUsers = () => API.get('/user/users');
export const updateUserRole = (id, role) => API.patch(`/user/${id}`, role);
export const googleLogin = (token) => API.post('user/googleLogin', token);
// Testing purposes
export const updateProfile = (formData) => API.post('/user/updateProfile', formData);

export const fetchTrails = () => API.get('/trails');
export const createTrail = (newTrail) => API.post('/trails', newTrail);
export const updateTrail = (id, updatedTrail) => API.patch(`/trails/${id}`, updatedTrail);
export const deleteTrail = (id) => API.delete(`/trails/${id}`);

export const fetchMarkers = () => API.get('/marker');
export const createMarker = (newMarker) => API.post('/marker', newMarker);
export const updateMarker = (id, updatedMarker) => API.patch(`/marker/${id}`, updatedMarker);
export const deleteMarker = (id) => API.delete(`/marker/${id}`);