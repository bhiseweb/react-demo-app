import {call, put} from 'redux-saga/effects';
import {fetchAlbums} from '../api/FetchAlbumData';

export function* loadAlbums() {
  const albums = yield call(fetchAlbums);
  yield put({type: 'ALBUMS_RECEIVED', albums});
}
