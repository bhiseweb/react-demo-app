import {call, put} from 'redux-saga/effects';
import {fetchUsers} from '../api/FetchUserData';

export function* loadUsers() {
  const users = yield call(fetchUsers);
  yield put({type: 'USERS_RECEIVED', users});
}
