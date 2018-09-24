import { call, put, takeEvery, takeLatest, ForkEffect, all, fork, take } from 'redux-saga/effects'
import { USER_FETCH_SUCCEEDED, FETCH_ADMIN_INFO, USER_FETCH_ERROR, FETCH_ADMIN_INFO_SUCCESS, FETCH_USER, ADD_USER, UPDATE_USER_ROLE,  UPDATE_USER_ROLE_SUCCEEDED } from '../../constants';
import { UPDATE_SYSADMIN_URL, FETCH_USER_URL, GET_SYSADMIN_URL} from './resourceConstant';

export function* fetchUser(action) {   
  try {    
    const users = yield call(getUsers);    
    yield put({type: USER_FETCH_SUCCEEDED, users: users });
  }
  catch (e) {
    yield put({type: USER_FETCH_ERROR, message: e.message});
  }  
}

function getUsers() {  
  return fetch(FETCH_USER_URL);
}

function updateUserRoleService(action) 
{ 
  console.log('update user action', action);

  let userIds = action.usersId; 
  let role = action.role;
   
  const fetchSettings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',  
    },
    body: JSON.stringify({
      usersId : userIds, 
      role : role
    })         
  };
  let updateUserUrl : string = UPDATE_SYSADMIN_URL;
  return fetch(updateUserUrl, fetchSettings);
}

export function* updateUser(action) {
  try {
   
    const result = yield call(updateUserRoleService, action);        
    yield put({type: UPDATE_USER_ROLE_SUCCEEDED, userRoleUpdate: result});
  
  } catch (e) {
    yield put({type: 'USER_UPDATE_ERROR', message: e.message});
  }
}

export function* fetchUserSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(FETCH_USER, fetchUser);
}

export  function* updateUserRoleSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(UPDATE_USER_ROLE, updateUser);
}

///////////////

export function* getSysAdmin(action) {   
  try {    
    console.log('initiating getsysadmin');
    const users = yield call(getSysAdminUser, action.username);    
    yield put({type: FETCH_ADMIN_INFO_SUCCESS, sysadmin : users });
  }
  catch (e) {
    yield put({type: 'FETCH_ADMIN_INFO_ERRORs', message: e.message});
  }  
}

function getSysAdminUser(name) {  
  let urlPath = GET_SYSADMIN_URL + name;
  console.log('sysadmin', urlPath);
  return fetch(urlPath);
}

export function* fetchSysAdmin(): IterableIterator<ForkEffect> {
  yield takeLatest(FETCH_ADMIN_INFO, getSysAdmin);
}

//////////////

export default function* root() {
  yield all([
    fork(fetchUserSaga),
    fork(updateUserRoleSaga),
    fork(fetchSysAdmin)
  ])
}
