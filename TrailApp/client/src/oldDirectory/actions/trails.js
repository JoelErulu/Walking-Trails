import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/actionTypes.js';
import * as api from '../../api/index.js';

export const getTrails = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTrails();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const createTrail = (trail) => async (dispatch) => {
    try {
        const { data } = await api.createTrail(trail);

        dispatch({ type: CREATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const updateTrail = (id, trail) => async (dispatch) => {
    try {
        const { data } = await api.updateTrail(id, trail);

        dispatch({ type: UPDATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteTrail = (id) => async (dispatch) => {
    try {
        await api.deleteTrail(id);

        dispatch({ type: DELETE, payload: id });
    } catch (err) {
        console.log(err);
    }
}