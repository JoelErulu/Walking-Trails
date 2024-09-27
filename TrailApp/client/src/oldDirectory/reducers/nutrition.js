import { FETCH_ALL, CREATE, UPDATE, START_LOADING, END_LOADING, DELETE} from '../../constants/actionTypes.js';

export default (state = { isLoading: true, nutritions: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, nutritions: action.payload };
        case CREATE:
            return { ...state, nutritions: [ ...state, action.payload] };
        case UPDATE:
            return {...state, nutritions: state.nutritions.map((nutrition) => nutrition._id === action.payload._id ? action.payload : nutrition)}; 
        case DELETE:
            return { ...state, nutritions: state.filter((nutrition) => nutrition._id !== action.payload) };
        default:
            return state;
    }
}