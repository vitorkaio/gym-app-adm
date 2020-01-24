import {action} from 'typesafe-actions';

import {AuthTypes} from './types';
import {AuthUser, AuthLogin} from 'models/TypesAux';

// **** Auth User
export const authUserRequest = (authLogin: AuthLogin) =>
  action(AuthTypes.AUTH_REQUEST, {authLogin});
export const authUserSuccess = (authUser: AuthUser) =>
  action(AuthTypes.AUTH_SUCCCES, {authUser});
export const authUserError = (msg: string) =>
  action(AuthTypes.AUTH_ERROR, {msg});
export const authUserReset = () => action(AuthTypes.AUTH_RESET);
