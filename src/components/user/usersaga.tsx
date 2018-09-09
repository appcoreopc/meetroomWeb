

import { call, put, takeEvery, takeLatest, ForkEffect } from 'redux-saga/effects'
import { fork } from 'redux-saga/effects';

function* fetchUser(action) {
    try {
      console.log('ADD_USER user data');
      // const user = yield call(Api.fetchUser, action.payload.userId);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "ADD_USER", message: e.message});
    }
 }

 function* mySaga(): IterableIterator<ForkEffect> {
    yield takeEvery("ADD_USER", fetchUser);
  }


// Register all your watchers
export default function* root() {
    yield [
      fork(mySaga),
    ]
  }

  