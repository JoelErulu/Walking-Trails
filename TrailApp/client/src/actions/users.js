import { FETCH_ALL, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

// TODO: Add DELETE user function
export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchUsers();

        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}
export const updateUserRole = (id, roleType) => async (dispatch) => {
    try {
        const { data } = await api.updateUserRole(id, roleType);
        console.log(data);
        dispatch({ type: UPDATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}