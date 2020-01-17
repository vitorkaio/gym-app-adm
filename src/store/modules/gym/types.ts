import User from 'models/User';
import {Action} from 'redux';
import {CreateUser} from 'models/TypesAux';

/**
 * Action types
 */
export enum GymTypes {
  USER_REQUEST = '@user/USER_REQUEST',
  USER_SUCCCES = '@user/USER_SUCCCES',
  USER_ERROR = '@user/USER_ERROR',

  CREATE_USER_REQUEST = '@create_user/CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS = '@create_user/CREATE_USER_SUCCESS',
  CREATE_USER_ERROR = '@create_user/CREATE_USER_ERROR',
  CREATE_USER_RESET = '@create_user/CREATE_USER_RESET',

  REMOVE_USERS_REQUEST = '@remove_user/REMOVE_USER_REQUEST',
  REMOVE_USERS_SUCCESS = '@remove_user/REMOVE_USERS_SUCCESS',
  REMOVE_USERS_ERROR = '@remove_user/REMOVE_USERS_ERROR',
  REMOVE_USERS_RESET = '@remove_user/REMOVE_USERS_RESET',
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
