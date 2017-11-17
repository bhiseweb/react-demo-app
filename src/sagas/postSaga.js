import {call, put } from 'redux-saga/effects';
import {fetchPost} from '../api/FetchPostData';

export function* loadPosts() {
  const posts = yield call(fetchPost);
  yield put({type: 'POSTS_RECEIVED', posts});
}
