import {all} from 'redux-saga/effects';
import gymSagas from './gym/sagas';

export default function* rootSaga() {
  return yield all([...gymSagas]);
}
