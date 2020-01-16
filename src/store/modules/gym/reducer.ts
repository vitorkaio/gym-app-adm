import {Reducer} from 'redux';
import produce from 'immer';
import {GymState, GymTypes} from './types';

const INITIAL_STATE: GymState = {
  users: [],
  users_loading: false,
  users_error: false,

  create_user_msg: '',
  create_user_loading: false,
  create_user_error: false,
};

const gymReducer: Reducer<GymState> = produce(
  (newDraft: GymState = INITIAL_STATE, action) => {
    const draft = newDraft;
    const {type, payload} = action;
    switch (type) {
      case GymTypes.USER_REQUEST:
        draft.users_loading = true;
        draft.users_error = false;
        break;

      case GymTypes.USER_SUCCCES:
        draft.users = payload.users;
        draft.users_loading = false;
        draft.users_error = false;
        break;

      case GymTypes.USER_ERROR:
        draft.users = [];
        draft.users_loading = false;
        draft.users_error = false;
        break;

      case GymTypes.CREATE_USER_REQUEST:
        draft.create_user_loading = true;
        draft.create_user_error = false;
        break;

      case GymTypes.CREATE_USER_SUCCESS:
        draft.create_user_msg = payload.msg;
        draft.users = payload.users;
        draft.create_user_loading = false;
        draft.create_user_error = false;
        break;

      case GymTypes.CREATE_USER_ERROR:
        draft.create_user_msg = payload.err;
        draft.create_user_loading = false;
        draft.create_user_error = true;
        break;

      case GymTypes.CREATE_USER_RESET:
        draft.create_user_msg = '';
        draft.create_user_loading = false;
        draft.create_user_error = false;
        break;

      default:
        return draft;
    }
    return newDraft;
  },
);

export default gymReducer;
