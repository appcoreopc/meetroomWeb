import { call, put, takeEvery, takeLatest, ForkEffect, all, fork, take } from 'redux-saga/effects';
import { AUTHENTICATE_USER_SUCCESS } from '../../constants';

export function* authenticateUser(action) {     
  try {    
    console.log('AUTHENTICATE_USER', );   
    const result = yield call(verifyUserAccess);    
    yield put({type: 'AUTHENTICATE_USER_SUCCESS', authentication : result });
  }
  catch (e) {
    yield put({type: 'AUTHENTICATE_USER_ERR', message: e.message});
  }  
}

function verifyUserAccess() {   
 return fetch("http://localhost:3000/authenticate");
}    

export function* loginAuthenticateSaga(): IterableIterator<ForkEffect> {
  yield takeLatest("AUTHENTICATE_USER", authenticateUser);
}

export default function* root() {
  yield all([
    fork(loginAuthenticateSaga)  
  ])
}
