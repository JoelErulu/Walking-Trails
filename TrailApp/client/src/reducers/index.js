import { combineReducers } from "redux";

import auth from './auth';
import users from './user';
import markers from './markers';

export default combineReducers({ auth, users, markers });
