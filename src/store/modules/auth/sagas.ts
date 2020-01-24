import {call, put, takeLatest} from 'redux-saga/effects';

import {authUserSuccess, authUserError} from './actions';
import {AuthTypes, AuthUserAction} from './types';
import FormatErrors, {ERRORS} from 'services/FormatErrors';
import {AuthUser} from 'models/TypesAux';
import AuthApi from 'services/AuthApi';

function* authUserRequestLoad(action: AuthUserAction) {
  try {
    const {payload} = action;
    const authUser: AuthUser = yield call(AuthApi.login, payload.authLogin);
    if (authUser) {
      yield put(authUserSuccess(authUser));
    } else {
      yield put(authUserError(FormatErrors.format(ERRORS.errServer)));
    }
  } catch (err) {
    yield put(authUserError(FormatErrors.format(err)));
  }
}

export default [takeLatest(AuthTypes.AUTH_REQUEST, authUserRequestLoad)];
