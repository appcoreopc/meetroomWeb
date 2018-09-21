import { combineReducers } from 'redux';
import users from './userReducer';
import spinner from './spinnerReducer';
import sysadmin from './sysadminReducer';

export default combineReducers({
  users, spinner, sysadmin
})