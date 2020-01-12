import User from 'models/User';

/**
 * Action types
 */
export enum GymTypes {
  USER_REQUEST = '@user/USER_REQUEST',
  USER_SUCCCES = '@user/USER_SUCCCES',
  USER_ERROR = '@user/USER_ERROR',
}

export interface GymState {
  users: User[];
  users_loading: boolean;
  users_error: boolean;
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
