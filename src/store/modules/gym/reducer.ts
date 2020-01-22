import {Reducer} from 'redux';
import produce from 'immer';
import {GymState, GymTypes} from './types';

const INITIAL_STATE: GymState = {
  users: [],
  users_loading: false,
  users_error: false,
  users_error_msg: '',

  create_user_success: false,
  create_user_loading: false,
  create_user_error: false,
  create_user_error_msg: '',

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

  add_exercise_training_success: false,
  add_exercise_training_loading: false,
  add_exercise_training_error: false,
  add_exercise_training_error_msg: '',

  remove_exercise_training_success: false,
  remove_exercise_training_loading: false,
  remove_exercise_training_error: false,
  remove_exercise_training_error_msg: '',

  edit_user_success: false,
  edit_user_loading: false,
  edit_user_error: false,
  edit_user_error_msg: '',

  edit_training_success: false,
  edit_training_loading: false,
  edit_training_error: false,
  edit_training_error_msg: '',

  edit_exercise_success: false,
  edit_exercise_loading: false,
  edit_exercise_error: false,
  edit_exercise_error_msg: '',
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
        draft.users_error_msg = payload.msg;
        break;

      // ********************* CREATE NEW USER *********************
      case GymTypes.CREATE_USER_REQUEST:
        draft.create_user_loading = true;
        draft.create_user_error = false;
        break;

      case GymTypes.CREATE_USER_SUCCESS:
        draft.users = payload.users;
        draft.create_user_success = true;
        draft.create_user_loading = false;
        draft.create_user_error = false;
        draft.create_user_error_msg = '';
        break;

      case GymTypes.CREATE_USER_ERROR:
        draft.create_user_success = false;
        draft.create_user_loading = false;
        draft.create_user_error = true;
        draft.create_user_error_msg = payload.err;
        break;

      case GymTypes.CREATE_USER_RESET:
        draft.create_user_success = false;
        draft.create_user_loading = false;
        draft.create_user_error = false;
        draft.create_user_error_msg = '';
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

      // ********************* ADD EXERCISE TRAINING *********************
      case GymTypes.ADD_EXERCISE_TRAINING_REQUEST:
        draft.add_exercise_training_loading = true;
        draft.add_exercise_training_success = false;
        draft.add_exercise_training_error = false;
        draft.add_exercise_training_error_msg = '';
        break;

      case GymTypes.ADD_EXERCISE_TRAINING_SUCCESS:
        draft.users = payload.users;
        draft.add_exercise_training_success = true;
        draft.add_exercise_training_loading = false;
        draft.add_exercise_training_error = false;
        draft.add_exercise_training_error_msg = '';
        break;

      case GymTypes.ADD_EXERCISE_TRAINING_ERROR:
        draft.add_exercise_training_success = false;
        draft.add_exercise_training_loading = false;
        draft.add_exercise_training_error = true;
        draft.add_exercise_training_error_msg = payload.msg;
        break;

      case GymTypes.ADD_EXERCISE_TRAINING_RESET:
        draft.add_exercise_training_success = false;
        draft.add_exercise_training_loading = false;
        draft.add_exercise_training_error = false;
        draft.add_exercise_training_error_msg = '';
        break;

      // ********************* REMOVE EXERCISE TRAINING *********************
      case GymTypes.REMOVE_EXERCISE_TRAINING_REQUEST:
        draft.remove_exercise_training_loading = true;
        draft.remove_exercise_training_success = false;
        draft.remove_exercise_training_error = false;
        draft.remove_exercise_training_error_msg = '';
        break;

      case GymTypes.REMOVE_EXERCISE_TRAINING_SUCCESS:
        draft.users = payload.users;
        draft.remove_exercise_training_success = true;
        draft.remove_exercise_training_loading = false;
        draft.remove_exercise_training_error = false;
        draft.remove_exercise_training_error_msg = '';
        break;

      case GymTypes.REMOVE_EXERCISE_TRAINING_ERROR:
        draft.remove_exercise_training_success = false;
        draft.remove_exercise_training_loading = false;
        draft.remove_exercise_training_error = true;
        draft.remove_exercise_training_error_msg = payload.msg;
        break;

      case GymTypes.REMOVE_EXERCISE_TRAINING_RESET:
        draft.remove_exercise_training_success = false;
        draft.remove_exercise_training_loading = false;
        draft.remove_exercise_training_error = false;
        draft.remove_exercise_training_error_msg = '';
        break;

      // ********************* EDIT USER *********************
      case GymTypes.EDIT_USER_REQUEST:
        draft.edit_user_loading = true;
        draft.edit_user_success = false;
        draft.edit_user_error = false;
        draft.edit_user_error_msg = '';
        break;

      case GymTypes.EDIT_USER_SUCCESS:
        draft.users = payload.users;
        draft.edit_user_success = true;
        draft.edit_user_loading = false;
        draft.edit_user_error = false;
        draft.edit_user_error_msg = '';
        break;

      case GymTypes.EDIT_USER_ERROR:
        draft.edit_user_success = false;
        draft.edit_user_loading = false;
        draft.edit_user_error = true;
        draft.edit_user_error_msg = payload.msg;
        break;

      case GymTypes.EDIT_USER_RESET:
        draft.edit_user_success = false;
        draft.edit_user_loading = false;
        draft.edit_user_error = false;
        draft.edit_user_error_msg = '';
        break;

      // ********************* EDIT TRAINING *********************
      case GymTypes.EDIT_TRAINING_REQUEST:
        draft.edit_training_loading = true;
        draft.edit_training_success = false;
        draft.edit_training_error = false;
        draft.edit_training_error_msg = '';
        break;

      case GymTypes.EDIT_TRAINING_SUCCESS:
        draft.users = payload.users;
        draft.edit_training_success = true;
        draft.edit_training_loading = false;
        draft.edit_training_error = false;
        draft.edit_training_error_msg = '';
        break;

      case GymTypes.EDIT_TRAINING_ERROR:
        draft.edit_training_success = false;
        draft.edit_training_loading = false;
        draft.edit_training_error = true;
        draft.edit_training_error_msg = payload.msg;
        break;

      case GymTypes.EDIT_TRAINING_RESET:
        draft.edit_training_success = false;
        draft.edit_training_loading = false;
        draft.edit_training_error = false;
        draft.edit_training_error_msg = '';
        break;

      // ********************* EDIT EXERCISE *********************
      case GymTypes.EDIT_EXERCISE_REQUEST:
        draft.edit_exercise_loading = true;
        draft.edit_exercise_success = false;
        draft.edit_exercise_error = false;
        draft.edit_exercise_error_msg = '';
        break;

      case GymTypes.EDIT_EXERCISE_SUCCESS:
        draft.users = payload.users;
        draft.edit_exercise_success = true;
        draft.edit_exercise_loading = false;
        draft.edit_exercise_error = false;
        draft.edit_exercise_error_msg = '';
        break;

      case GymTypes.EDIT_EXERCISE_ERROR:
        draft.edit_exercise_success = false;
        draft.edit_exercise_loading = false;
        draft.edit_exercise_error = true;
        draft.edit_exercise_error_msg = payload.msg;
        break;

      case GymTypes.EDIT_EXERCISE_RESET:
        draft.edit_exercise_success = false;
        draft.edit_exercise_loading = false;
        draft.edit_exercise_error = false;
        draft.edit_exercise_error_msg = '';
        break;

      default:
        return draft;
    }
    return newDraft;
  },
);

export default gymReducer;
