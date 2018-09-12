import { call, put, takeEvery, takeLatest, ForkEffect } from 'redux-saga/effects'
import { all, fork } from 'redux-saga/effects';
import userApi from './apiRequest';

export async function* fetchUser(action) { 
  
  try {
    console.log('FETCH_USER user data -e', );
    let api = new userApi();
    const users = await api.getUsers("a");
    console.log('USER_FETCH_SUCCEEDED', users);
    yield put({type: 'USER_FETCH_SUCCEEDED', users: users});
  }
  catch (e) {
    yield put({type: 'USER_FETCH_ERROR', message: e.message});
  }
  
}

export async function* updateUser(action) {
  try {
    console.log('UPDATE user data -e');
    let api = new userApi();
    const user = await api.getUsers("a");   
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
