import {all} from 'redux-saga/effects';
import gymSagas from './gym/sagas';
import authSagas from './auth/sagas';

export default function* rootSaga() {
  return yield all([...gymSagas, ...authSagas]);
}
