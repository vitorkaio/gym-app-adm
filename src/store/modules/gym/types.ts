import User from 'models/User';
import {Action} from 'redux';
import {CreateUser} from 'models/TypesAux';

/**
 * Action types
 */
export enum GymTypes {
  USER_REQUEST = '@gym/USER_REQUEST',
  USER_SUCCCES = '@gym/USER_SUCCCES',
  USER_ERROR = '@gym/USER_ERROR',

  CREATE_USER_REQUEST = '@gym/CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS = '@gym/CREATE_USER_SUCCESS',
  CREATE_USER_ERROR = '@gym/CREATE_USER_ERROR',
  CREATE_USER_RESET = '@gym/CREATE_USER_RESET',

  REMOVE_USERS_REQUEST = '@gym/REMOVE_USER_REQUEST',
  REMOVE_USERS_SUCCESS = '@gym/REMOVE_USERS_SUCCESS',
  REMOVE_USERS_ERROR = '@gym/REMOVE_USERS_ERROR',
  REMOVE_USERS_RESET = '@gym/REMOVE_USERS_RESET',

  UPDATE_ADD_TRAINING_USER_REQUEST = '@gym/UPDATE_ADD_TRAINING_USER_REQUEST',
  UPDATE_ADD_TRAINING_USER_SUCCESS = '@gym/UPDATE_ADD_TRAINING_USER_SUCCESS',
  UPDATE_ADD_TRAINING_USER_ERROR = '@gym/UPDATE_ADD_TRAINING_USER_ERROR',
  UPDATE_ADD_TRAINING_USER_RESET = '@gym/UPDATE_ADD_TRAINING_USER_RESET',
}

export interface GymState {
  users: User[];
  users_loading: boolean;
  users_error: boolean;

  create_user_msg: string;
  create_user_loading: boolean;
  create_user_error: boolean;

  remove_user_loading: boolean;
  remove_user_success: boolean;
  remove_user_error: boolean;
  remove_user_error_msg: string;

  update_add_training_user_loading: boolean;
  update_add_training_user_success: boolean;
  update_add_training_user_error: boolean;
  update_add_training_user_error_msg: string;
}

export interface CreateUserAction extends Action {
  payload: {
    newUser: CreateUser;
  };
}

export interface RemoveUserAction extends Action {
  payload: {
    id: string;
  };
}

export interface UpdateAddTrainingUserAction extends Action {
  payload: {
    id: string;
    name: string;
  };
}

/**
 * Data types
 */
/* export interface Repository {
  id: number
  name: string
} */

/**
 * State type
 */
/* export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
} */
