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
export const createUserSuccess = (msg: string, users: User[]) =>
  action(GymTypes.CREATE_USER_SUCCESS, {msg, users});
export const createUserError = (err: string) =>
  action(GymTypes.CREATE_USER_ERROR, {err});
export const createUserReset = () => action(GymTypes.CREATE_USER_RESET);

// REMOVE USER
export const removeUserRequest = (id: string) =>
  action(GymTypes.REMOVE_USERS_REQUEST, {id});
export const removeUserSuccess = (users: User[]) =>
  action(GymTypes.REMOVE_USERS_SUCCESS, {users});
export const removeUserError = (msg: string) =>
  action(GymTypes.REMOVE_USERS_ERROR, {msg});
export const removeUserReset = () => action(GymTypes.REMOVE_USERS_RESET);

// REMOVE USER
export const updateAddTrainingUserRequest = (id: string, name: string) =>
  action(GymTypes.UPDATE_ADD_TRAINING_USER_REQUEST, {id, name});
export const updateAddTrainingUserSuccess = (users: User[]) =>
  action(GymTypes.UPDATE_ADD_TRAINING_USER_SUCCESS, {users});
export const updateAddTrainingUserError = (msg: string) =>
  action(GymTypes.UPDATE_ADD_TRAINING_USER_ERROR, {msg});
export const updateAddTrainingUserReset = () =>
  action(GymTypes.UPDATE_ADD_TRAINING_USER_RESET);
