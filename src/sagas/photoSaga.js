import {call, put} from 'redux-saga/effects';
import {fetchPhotos} from '../api/FetchPhotoData';

export function* loadPhotos() {
  const photos = yield call(fetchPhotos);
  yield put({type: 'PHOTOS_RECEIVED', photos});
}

