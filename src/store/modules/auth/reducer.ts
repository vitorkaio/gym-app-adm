import {Reducer} from 'redux';
import produce from 'immer';
import {AuthState, AuthTypes} from './types';

const INITIAL_STATE: AuthState = {
  authUser: null,
  authUser_loading: false,
  authUser_error: false,
  authUser_error_msg: '',
};

const authReducer: Reducer<AuthState> = produce(
  (newDraft: AuthState = INITIAL_STATE, action) => {
    const draft = newDraft;
    const {type, payload} = action;
    switch (type) {
      // ********************* GET USERS *********************
      case AuthTypes.AUTH_REQUEST:
        draft.authUser_loading = true;
        draft.authUser_error = false;
        draft.authUser_error_msg = '';
        break;

      case AuthTypes.AUTH_SUCCCES:
        draft.authUser = payload.authUser;
        draft.authUser_loading = false;
        draft.authUser_error = false;
        draft.authUser_error_msg = '';
        break;

      case AuthTypes.AUTH_ERROR:
        draft.authUser = null;
        draft.authUser_loading = false;
        draft.authUser_error = true;
        draft.authUser_error_msg = payload.msg;
        break;

      case AuthTypes.AUTH_RESET:
        draft.authUser = null;
        draft.authUser_loading = false;
        draft.authUser_error = false;
        draft.authUser_error_msg = '';
        break;

      default:
        return draft;
    }
    return newDraft;
  },
);

export default authReducer;
