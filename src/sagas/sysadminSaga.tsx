

import { call, put, takeEvery, takeLatest, ForkEffect, all, fork, take } from 'redux-saga/effects'
import { FETCH_USER_URL} from '../components/user/resourceConstant';

function* getSysAdmin(action) {   
  try {    
    console.log('are we getting called here??? - GETDATA');
    const users = yield call(getSysAdminUser);  
    console.log('data data', users);
    yield put({type: 'GETDATA_OK', sysadmin : users });
  }
  catch (e) {
    yield put({type: 'GETDATA_ERROR', message: e.message});
  }  
}

function getSysAdminUser() {  
  return fetch(FETCH_USER_URL).then(response => response.json())
  .then(json => json);
}


function* fetchSysAdmin(): IterableIterator<ForkEffect> {

  console.log('get data / get data/');
  yield takeLatest('GET_DATA', getSysAdmin);
}

export default function* rootAdminSaga() {
  yield all([
    fork(fetchSysAdmin)
  ])
}
