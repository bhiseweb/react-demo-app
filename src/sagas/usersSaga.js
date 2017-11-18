import {call, put, take} from 'redux-saga/effects';
import {fetchUsers, createUser} from '../api/FetchUserData';
import { CREATE_USER } from '../constants/ActionTypes';

export function* loadUsers() {
  const users = yield call(fetchUsers);
  yield put({type: 'USERS_RECEIVED', users});
}

export function* saveUser() {
  while (true) {
    const { payload } = yield take(CREATE_USER);
    console.log("in user saga", payload);
    const user = yield call(createUser, payload);
    yield put({type: 'USER_CREATED', user});
  }
}
