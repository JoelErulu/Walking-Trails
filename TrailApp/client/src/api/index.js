import axios from 'axios';

// Create an Axios instance with a base URL
const API = axios.create({ baseURL: 'http://localhost:5000' });

// User API Calls
export const signUp = async (formData) => {
    try {
        const response = await API.post('/api/user/signup', formData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const signIn = async (formData) => {
    try {
        const response = await API.post('/api/user/signin', formData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const logOut = async (token) => {
    try {
        const response = await API.post('/api/user/logout', { token });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateUserRole = async (id, roleType) => {
    try {
        const response = await API.patch(`/api/user/updateRole/${id}`, { roleType });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateProfile = async (id, formData) => {
    try {
        const response = await API.patch(`/api/user/updateProfile/${id}`, formData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await API.delete(`/api/user/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const fetchUsers = async () => {
    try {
        const response = await API.get('/api/user/users');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const fetchUser = async (id) => {
    try {
        const response = await API.get(`/api/user/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const googleLogin = async (token) => {
    try {
        const response = await API.post('/api/user/googleLogin', { token });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

// Trail API Calls
export const fetchTrails = async () => {
    try {
        const response = await API.get('/trails');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const createTrail = async (newTrail) => {
    try {
        const response = await API.post('/trails', newTrail);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateTrail = async (id, updatedTrail) => {
    try {
        const response = await API.patch(`/trails/${id}`, updatedTrail);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const deleteTrail = async (id) => {
    try {
        const response = await API.delete(`/trails/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

// Marker API Calls
export const fetchMarkers = async () => {
    try {
        const response = await API.get('/marker');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const createMarker = async (newMarker) => {
    try {
        const response = await API.post('/marker', newMarker);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateMarker = async (id, updatedMarker) => {
    try {
        const response = await API.patch(`/marker/${id}`, updatedMarker);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const deleteMarker = async (id) => {
    try {
        const response = await API.delete(`/marker/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

// Video API Calls
export const fetchVideos = async () => {
    try {
        const response = await API.get('/api/video/videos');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const postVideo = async (videoData) => {
    try {
        const response = await API.post('/api/video/upload', videoData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const updateVideo = async (id, videoData) => {
    try {
        const response = await API.patch(`/api/video/${id}`, videoData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const addLike = async (id, like) => {
    try {
        const response = await API.patch(`/api/video/like/${id}`, like);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const addDislike = async (id, dislike) => {
    try {
        const response = await API.patch(`/api/video/dislike/${id}`, dislike);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const deleteVideo = async (id) => {
    try {
        const response = await API.delete(`/api/video/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};
