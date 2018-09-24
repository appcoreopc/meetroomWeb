import { combineReducers } from 'redux';
import users from './userReducer';
import spinner from './spinnerReducer';
import sysadmin from './sysadminReducer';
import getdatareducer from './getdatareducer';

export default combineReducers({
  users, spinner, sysadmin, getdatareducer
})