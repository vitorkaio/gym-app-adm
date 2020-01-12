import {call, put, takeLatest} from 'redux-saga/effects';
import GymApi from 'services/GymApi';

import User from 'models/User';
import {userSuccess, userError} from './actions';
import {GymTypes} from './types';

function* usersRequestLoad() {
  try {
    const users: User[] = yield call(GymApi.getUsers);
    yield put(userSuccess(users));
  } catch (err) {
    yield put(userError());
  }
}

export default [takeLatest(GymTypes.USER_REQUEST, usersRequestLoad)];
