import { AUTH } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log(data);
        dispatch({ type: AUTH, data });
        if(data.result.role === "admin" || data.result.role ==="SuperAdmin"){
            navigate('/admin');
        }else{
            navigate('/home');
        }
    } catch (err) {
        console.log(err);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        navigate('/home');
    } catch (err) {
        console.log(err);
    }
}