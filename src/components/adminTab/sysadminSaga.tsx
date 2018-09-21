import { call, put, takeEvery, takeLatest, ForkEffect, all, fork, take } from 'redux-saga/effects'
import { FETCH_ADMIN_INFO, FETCH_ADMIN_INFO_SUCCESS } from '../../constants';

export function* getSysAdmin(action) {   
  try {    
    console.log('initiating getsysadmin');
    const users = yield call(getSysAdminUser);    
    yield put({type: FETCH_ADMIN_INFO_SUCCESS, users: users });
  }
  catch (e) {
    yield put({type: 'FETCH_ADMIN_INFO_ERRORs', message: e.message});
  }  
}

function getSysAdminUser() {  
  return fetch("http://localhost:3000/users/all");
}

export function* fetchSysAdmin(): IterableIterator<ForkEffect> {
  yield takeLatest(FETCH_ADMIN_INFO, getSysAdmin);
}

export default function* root() {
  yield all([
    fork(fetchSysAdmin)
  ])
}
