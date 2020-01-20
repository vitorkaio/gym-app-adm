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

  remove_user_success: false,
  remove_user_loading: false,
  remove_user_error: false,
  remove_user_error_msg: '',

  update_add_training_user_success: false,
  update_add_training_user_loading: false,
  update_add_training_user_error: false,
  update_add_training_user_error_msg: '',

  remove_training_user_success: false,
  remove_training_user_loading: false,
  remove_training_user_error: false,
  remove_training_user_error_msg: '',
};

const gymReducer: Reducer<GymState> = produce(
  (newDraft: GymState = INITIAL_STATE, action) => {
    const draft = newDraft;
    const {type, payload} = action;
    switch (type) {
      // ********************* GET USERS *********************
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
        draft.users_error = true;
        break;

      // ********************* CREATE NEW USER *********************
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

      // ********************* REMOVE USER *********************
      case GymTypes.REMOVE_USERS_REQUEST:
        draft.remove_user_loading = true;
        draft.remove_user_success = false;
        draft.remove_user_error = false;
        draft.remove_user_error_msg = '';
        break;

      case GymTypes.REMOVE_USERS_SUCCESS:
        draft.users = payload.users;
        draft.remove_user_success = true;
        draft.remove_user_loading = false;
        draft.remove_user_error = false;
        draft.remove_user_error_msg = '';
        break;

      case GymTypes.REMOVE_USERS_ERROR:
        draft.remove_user_success = false;
        draft.remove_user_loading = false;
        draft.remove_user_error = true;
        draft.remove_user_error_msg = payload.msg;
        break;

      case GymTypes.REMOVE_USERS_RESET:
        draft.remove_user_success = false;
        draft.remove_user_loading = false;
        draft.remove_user_error = false;
        draft.remove_user_error_msg = '';
        break;

      // ********************* UPDATE ADD TRAINING USER *********************
      case GymTypes.UPDATE_ADD_TRAINING_USER_REQUEST:
        draft.update_add_training_user_loading = true;
        draft.update_add_training_user_success = false;
        draft.update_add_training_user_error = false;
        draft.update_add_training_user_error_msg = '';
        break;

      case GymTypes.UPDATE_ADD_TRAINING_USER_SUCCESS:
        draft.users = payload.users;
        draft.update_add_training_user_success = true;
        draft.update_add_training_user_loading = false;
        draft.update_add_training_user_error = false;
        draft.update_add_training_user_error_msg = '';
        break;

      case GymTypes.UPDATE_ADD_TRAINING_USER_ERROR:
        draft.update_add_training_user_success = false;
        draft.update_add_training_user_loading = false;
        draft.update_add_training_user_error = true;
        draft.update_add_training_user_error_msg = payload.msg;
        break;

      case GymTypes.UPDATE_ADD_TRAINING_USER_RESET:
        draft.update_add_training_user_success = false;
        draft.update_add_training_user_loading = false;
        draft.update_add_training_user_error = false;
        draft.update_add_training_user_error_msg = '';
        break;

      // ********************* REMOVE TRAINING USER *********************
      case GymTypes.REMOVE_TRAINING_USER_REQUEST:
        draft.remove_training_user_loading = true;
        draft.remove_training_user_success = false;
        draft.remove_training_user_error = false;
        draft.remove_training_user_error_msg = '';
        break;

      case GymTypes.REMOVE_TRAINING_USER_SUCCESS:
        draft.users = payload.users;
        draft.remove_training_user_success = true;
        draft.remove_training_user_loading = false;
        draft.remove_training_user_error = false;
        draft.remove_training_user_error_msg = '';
        break;

      case GymTypes.REMOVE_TRAINING_USER_ERROR:
        draft.remove_training_user_success = false;
        draft.remove_training_user_loading = false;
        draft.remove_training_user_error = true;
        draft.remove_training_user_error_msg = payload.msg;
        break;

      case GymTypes.REMOVE_TRAINING_USER_RESET:
        draft.remove_training_user_success = false;
        draft.remove_training_user_loading = false;
        draft.remove_training_user_error = false;
        draft.remove_training_user_error_msg = '';
        break;

      default:
        return draft;
    }
    return newDraft;
  },
);

export default gymReducer;
