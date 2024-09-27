import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/actionTypes.js';

export default (trails = [], action) => {
    switch (action.type) {
        case DELETE:
            return trails.filter((trail) => trail._id !== action.payload);
        case UPDATE:
            return trails.map((trail) => trail._id === action.payload._id ? action.payload : trail); 
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [ ...trails, action.payload];
        default:
            return trails;
    }
}
