import { combineReducers } from 'redux'; 

import userInfo from './userInfoReducer';
import purchase from './purchase';

export default combineReducers({
    userInfo,
    purchase,
});