import { FETCH_ALL, CREATE, UPDATE, START_LOADING, END_LOADING, DELETE} from '../constants/actionTypes.js';

const markers = (state = { isLoading: true, markers: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, markers: action.payload };
        case CREATE:
            return { ...state, markers: [ ...state, action.payload] };
        case UPDATE:
            return {...state, markers: state.markers.map((marker) => marker._id === action.payload._id ? action.payload : marker)}; 
        case DELETE:
            return { ...state, markers: state.filter((marker) => marker._id !== action.payload) };
        default:
            return state;
    }
}

export default markers;