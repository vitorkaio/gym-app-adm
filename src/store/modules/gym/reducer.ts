import {Reducer} from 'redux';
import produce from 'immer';
import {GymState, GymTypes} from './types';

const INITIAL_STATE: GymState = {
  users: [],
  users_loading: false,
  users_error: false,
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

      default:
        return draft;
    }
    return newDraft;
  },
);

export default gymReducer;
