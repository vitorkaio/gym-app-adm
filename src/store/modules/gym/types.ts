import User, {Exercise} from 'models/User';
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

  REMOVE_TRAINING_USER_REQUEST = '@gym/REMOVE_TRAINING_USER_REQUEST',
  REMOVE_TRAINING_USER_SUCCESS = '@gym/REMOVE_TRAINING_USER_SUCCESS',
  REMOVE_TRAINING_USER_ERROR = '@gym/REMOVE_TRAINING_USER_ERROR',
  REMOVE_TRAINING_USER_RESET = '@gym/REMOVE_TRAINING_USER_RESET',

  ADD_EXERCISE_TRAINING_REQUEST = '@gym/ADD_EXERCISE_TRAINING_REQUEST',
  ADD_EXERCISE_TRAINING_SUCCESS = '@gym/ADD_EXERCISE_TRAINING_SUCCESS',
  ADD_EXERCISE_TRAINING_ERROR = '@gym/ADD_EXERCISE_TRAINING_ERROR',
  ADD_EXERCISE_TRAINING_RESET = '@gym/ADD_EXERCISE_TRAINING_RESET',

  REMOVE_EXERCISE_TRAINING_REQUEST = '@gym/REMOVE_EXERCISE_TRAINING_REQUEST',
  REMOVE_EXERCISE_TRAINING_SUCCESS = '@gym/REMOVE_EXERCISE_TRAINING_SUCCESS',
  REMOVE_EXERCISE_TRAINING_ERROR = '@gym/REMOVE_EXERCISE_TRAINING_ERROR',
  REMOVE_EXERCISE_TRAINING_RESET = '@gym/REMOVE_EXERCISE_TRAINING_RESET',

  EDIT_USER_REQUEST = '@gym/EDIT_USER_REQUEST',
  EDIT_USER_SUCCESS = '@gym/EDIT_USER_SUCCESS',
  EDIT_USER_ERROR = '@gym/EDIT_USER_ERROR',
  EDIT_USER_RESET = '@gym/EDIT_USER_RESET',

  EDIT_TRAINING_REQUEST = '@gym/EDIT_TRAINING_REQUEST',
  EDIT_TRAINING_SUCCESS = '@gym/EDIT_TRAINING_SUCCESS',
  EDIT_TRAINING_ERROR = '@gym/EDIT_TRAINING_ERROR',
  EDIT_TRAINING_RESET = '@gym/EDIT_TRAINING_RESET',
}

export interface GymState {
  users: User[];
  users_loading: boolean;
  users_error: boolean;

  create_user_success: boolean;
  create_user_loading: boolean;
  create_user_error: boolean;
  create_user_error_msg: string;

  remove_user_loading: boolean;
  remove_user_success: boolean;
  remove_user_error: boolean;
  remove_user_error_msg: string;

  update_add_training_user_loading: boolean;
  update_add_training_user_success: boolean;
  update_add_training_user_error: boolean;
  update_add_training_user_error_msg: string;

  remove_training_user_loading: boolean;
  remove_training_user_success: boolean;
  remove_training_user_error: boolean;
  remove_training_user_error_msg: string;

  add_exercise_training_loading: boolean;
  add_exercise_training_success: boolean;
  add_exercise_training_error: boolean;
  add_exercise_training_error_msg: string;

  remove_exercise_training_loading: boolean;
  remove_exercise_training_success: boolean;
  remove_exercise_training_error: boolean;
  remove_exercise_training_error_msg: string;

  edit_user_loading: boolean;
  edit_user_success: boolean;
  edit_user_error: boolean;
  edit_user_error_msg: string;

  edit_training_loading: boolean;
  edit_training_success: boolean;
  edit_training_error: boolean;
  edit_training_error_msg: string;
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

export interface RemoveTrainingUserAction extends Action {
  payload: {
    idUser: string;
    idTraining: string;
  };
}

export interface AddExerciseTrainingAction extends Action {
  payload: {
    idTraining: string;
    exercise: Exercise;
  };
}

export interface RemoveExerciseTrainingAction extends Action {
  payload: {
    idTraining: string;
    idExercise: string;
  };
}

export interface EditUserAction extends Action {
  payload: {
    id: string;
    user: CreateUser;
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
