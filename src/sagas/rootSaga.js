import {all} from 'redux-saga/effects';
import {loadPhotos} from './photoSaga';
import {loadAlbums} from './albumSaga';
import {loadUsers, saveUser} from './usersSaga';
import {loadPosts} from './postSaga';

export function* rootLoad() {
  yield all([
    loadPhotos(),
    loadAlbums(),
    loadUsers(),
    loadPosts(),
    saveUser()
  ])
}