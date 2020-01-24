import {Action} from 'redux';
import {AuthUser, AuthLogin} from 'models/TypesAux';

export enum AuthTypes {
  AUTH_REQUEST = '@auth/AUTH_REQUEST',
  AUTH_SUCCCES = '@auth/AUTH_SUCCCES',
  AUTH_ERROR = '@auth/AUTH_ERROR',
  AUTH_RESET = '@auth/AUTH_RESET',
}

export interface AuthState {
  authUser: AuthUser | null;
  authUser_loading: boolean;
  authUser_error: boolean;
  authUser_error_msg: string;
}

export interface AuthUserAction extends Action {
  payload: {
    authLogin: AuthLogin;
  };
}
