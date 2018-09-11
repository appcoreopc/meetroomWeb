

import { call, put, takeEvery, takeLatest, ForkEffect } from 'redux-saga/effects'
import { all, fork } from 'redux-saga/effects';
import userApi from './apiRequest';

async function* fetchUser(action) {
    try {
      console.log('ADD_USER user data -e');
      let api = new userApi();
      const user = await api.getUsers("a");
      //console.log('fetching data from url');
      //const user = yield call(api.getUsers, action);
      console.log('userdata', user);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "ADD_USER", message: e.message});
    }
 }

 function* mySaga(): IterableIterator<ForkEffect> {
    yield takeLatest("ADD_USER", fetchUser);
  }

// Register all your watchers
export default function* root() {
    yield all([
      fork(mySaga)
    ])
  }

  