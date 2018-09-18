import { call, put, takeEvery, takeLatest, ForkEffect, all, fork, take } from 'redux-saga/effects'
import userApi from './apiRequest';
import { USER_FETCH_SUCCEEDED, FETCH_USER, ADD_USER, UPDATE_USER_ROLE,  UPDATE_USER_ROLE_SUCCEEDED } from '../../constants';


export function* fetchUser(action) {   
  try {    
    const users = yield call(getUsers);    
    yield put({type: USER_FETCH_SUCCEEDED, users: users });
  }
  catch (e) {
    yield put({type: 'USER_FETCH_ERROR', message: e.message});
  }  
}

function getUsers() {  
  return fetch("http://localhost:3000/users/all");
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
  let updateUserUrl : string = 'http://localhost:3000/users/setAdmin';
  return fetch('http://localhost:3000/users/setAdmin', fetchSettings);
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

export default function* root() {
  yield all([
    fork(fetchUserSaga),
    fork(updateUserRoleSaga)
  ])
}
