import { FETCH_ALL, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE} from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getNutrition = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchNutrition();

        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}

export const createNutrition = (nutrition) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createNutrition(nutrition);

        dispatch({ type: CREATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const updateNutrition = (id, nutrition) => async (dispatch) => {
    try {
        const { data } = await api.updateNutrition(id, nutrition);

        dispatch({ type: UPDATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteNutrition = (id) => async (dispatch) => {
    try {
        await api.deleteNutrition(id);

        dispatch({ type: DELETE, payload: id });
    } catch (err) {
        console.log(err);
    }
}
