import { combineReducers } from 'redux';
import users from './userReducer';
import spinner from './spinnerReducer';

export default combineReducers({
  users, spinner
})