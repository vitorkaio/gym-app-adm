import {action} from 'typesafe-actions';

import User from 'models/User';
import {GymTypes} from './types';
import {CreateUser} from 'models/TypesAux';

// REQUEST *** USER ***
export const usersRequest = () => action(GymTypes.USER_REQUEST);
export const userSuccess = (users: User[]) =>
  action(GymTypes.USER_SUCCCES, {users});
export const userError = () => action(GymTypes.USER_ERROR);

// CREATE USER
export const createUserRequest = (newUser: CreateUser) =>
  action(GymTypes.CREATE_USER_REQUEST, {newUser});
export const createUserSuccess = (msg: string) =>
  action(GymTypes.CREATE_USER_SUCCESS, {msg});
export const createUserError = (err: string) =>
  action(GymTypes.CREATE_USER_ERROR, {err});
export const createUserReset = () => action(GymTypes.CREATE_USER_RESET);
