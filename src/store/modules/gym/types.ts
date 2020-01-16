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
}

export interface GymState {
  users: User[];
  users_loading: boolean;
  users_error: boolean;

  create_user_msg: string;
  create_user_loading: boolean;
  create_user_error: boolean;
}

export interface CreateUserAction extends Action {
  payload: {
    newUser: CreateUser;
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
