import {call, put, takeLatest} from 'redux-saga/effects';
import GymApi from 'services/GymApi';

import User from 'models/User';
import {
  userSuccess,
  userError,
  createUserSuccess,
  createUserError,
} from './actions';
import {GymTypes, CreateUserAction} from './types';

function* usersRequestLoad() {
  try {
    const users: User[] = yield call(GymApi.getUsers);
    yield put(userSuccess(users));
  } catch (err) {
    yield put(userError());
  }
}

function* createUserLoad(action: CreateUserAction) {
  const {payload} = action;
  try {
    const user: User = yield call(GymApi.createUser, payload.newUser);
    if (user) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(createUserSuccess('success', users));
      } else {
        yield put(createUserError('error'));
      }
    } else {
      yield put(createUserError('error'));
    }
  } catch (error) {
    yield put(createUserError('error'));
  }
}

export default [
  takeLatest(GymTypes.USER_REQUEST, usersRequestLoad),
  takeLatest(GymTypes.CREATE_USER_REQUEST, createUserLoad),
];
