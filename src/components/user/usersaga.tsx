import { call, put, takeEvery, takeLatest, ForkEffect, all, fork, take } from 'redux-saga/effects'
import userApi from './apiRequest';

export function* fetchUser(action) { 
  
  try {
    console.log('FETCH_USER user data -e', );
    //let api = new userApi();
    //const users = await api.getUsers("a");
    debugger;
    const users = yield call(getUsers);    
    yield put({type: 'USER_FETCH_SUCCEEDED', users: users });
  }
  catch (e) {
    yield put({type: 'USER_FETCH_ERROR', message: e.message});
  }  
}

function getUsers() {   
 return fetch("http://localhost:3000/users/all");
}
    
export function* updateUser(action) {
  try {
    console.log('UPDATE user data -e');
    let api = new userApi();
    const user = api.getUsers("a");   
    yield put({type: 'USER_UPDATE_SUCCEEDED', user: user});
    return user;
    
  } catch (e) {
    yield put({type: 'USER_UPDATE_ERROR', message: e.message});
  }
}

export function* fetchUserSaga(): IterableIterator<ForkEffect> {
  yield takeLatest("FETCH_USER", fetchUser);
}

export  function* updateUserRoleSaga(): IterableIterator<ForkEffect> {
  yield takeLatest("UPDATE_USER", updateUser);
}

export default function* root() {
  yield all([
    fork(fetchUserSaga),
    fork(updateUserRoleSaga)
  ])
}
