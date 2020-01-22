import {action} from 'typesafe-actions';

import User from 'models/User';
import {GymTypes} from './types';
import {CreateUser, AddExercise} from 'models/TypesAux';

// REQUEST *** USER ***
export const usersRequest = () => action(GymTypes.USER_REQUEST);
export const userSuccess = (users: User[]) =>
  action(GymTypes.USER_SUCCCES, {users});
export const userError = () => action(GymTypes.USER_ERROR);

// CREATE USER
export const createUserRequest = (newUser: CreateUser) =>
  action(GymTypes.CREATE_USER_REQUEST, {newUser});
export const createUserSuccess = (users: User[]) =>
  action(GymTypes.CREATE_USER_SUCCESS, {users});
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

// ADD TRAINING USER
export const updateAddTrainingUserRequest = (id: string, name: string) =>
  action(GymTypes.UPDATE_ADD_TRAINING_USER_REQUEST, {id, name});
export const updateAddTrainingUserSuccess = (users: User[]) =>
  action(GymTypes.UPDATE_ADD_TRAINING_USER_SUCCESS, {users});
export const updateAddTrainingUserError = (msg: string) =>
  action(GymTypes.UPDATE_ADD_TRAINING_USER_ERROR, {msg});
export const updateAddTrainingUserReset = () =>
  action(GymTypes.UPDATE_ADD_TRAINING_USER_RESET);

// REMOVE TRAINING USER
export const removeTrainingUserRequest = (idUser: string, idTraining: string) =>
  action(GymTypes.REMOVE_TRAINING_USER_REQUEST, {idUser, idTraining});
export const removeTrainingUserSuccess = (users: User[]) =>
  action(GymTypes.REMOVE_TRAINING_USER_SUCCESS, {users});
export const removeTrainingUserError = (msg: string) =>
  action(GymTypes.REMOVE_TRAINING_USER_ERROR, {msg});
export const removeTrainingUserReset = () =>
  action(GymTypes.REMOVE_TRAINING_USER_RESET);

// ADD EXERCISE TRAINING
export const addExerciseTrainingRequest = (
  idTraining: string,
  exercise: AddExercise,
) => action(GymTypes.ADD_EXERCISE_TRAINING_REQUEST, {idTraining, exercise});
export const addExerciseTrainingSuccess = (users: User[]) =>
  action(GymTypes.ADD_EXERCISE_TRAINING_SUCCESS, {users});
export const addExerciseTrainingError = (msg: string) =>
  action(GymTypes.ADD_EXERCISE_TRAINING_ERROR, {msg});
export const addExerciseTrainingReset = () =>
  action(GymTypes.ADD_EXERCISE_TRAINING_RESET);

// REMOVE EXERCISE TRAINING
export const removeExerciseTrainingRequest = (
  idTraining: string,
  idExercise: string,
) =>
  action(GymTypes.REMOVE_EXERCISE_TRAINING_REQUEST, {idTraining, idExercise});
export const removeExerciseTrainingSuccess = (users: User[]) =>
  action(GymTypes.REMOVE_EXERCISE_TRAINING_SUCCESS, {users});
export const removeExerciseTrainingError = (msg: string) =>
  action(GymTypes.REMOVE_EXERCISE_TRAINING_ERROR, {msg});
export const removeExerciseTrainingReset = () =>
  action(GymTypes.REMOVE_EXERCISE_TRAINING_RESET);

// EDIT USER
export const editUserRequest = (id: string, user: CreateUser) =>
  action(GymTypes.EDIT_USER_REQUEST, {id, user});
export const editUserSuccess = (users: User[]) =>
  action(GymTypes.EDIT_USER_SUCCESS, {users});
export const editUserError = (msg: string) =>
  action(GymTypes.EDIT_USER_ERROR, {msg});
export const editUserReset = () => action(GymTypes.EDIT_USER_RESET);

// EDIT TRAINING
export const editTrainingRequest = (id: string, name: string) =>
  action(GymTypes.EDIT_TRAINING_REQUEST, {id, name});
export const editTrainingSuccess = (users: User[]) =>
  action(GymTypes.EDIT_TRAINING_SUCCESS, {users});
export const editTrainingError = (msg: string) =>
  action(GymTypes.EDIT_TRAINING_ERROR, {msg});
export const editTrainingReset = () => action(GymTypes.EDIT_TRAINING_RESET);

// EDIT EXERCISE
export const editExerciseRequest = (
  idTraining: string,
  idExercise: string,
  exercise: AddExercise,
) => action(GymTypes.EDIT_EXERCISE_REQUEST, {idTraining, idExercise, exercise});
export const editExerciseSuccess = (users: User[]) =>
  action(GymTypes.EDIT_EXERCISE_SUCCESS, {users});
export const editExerciseError = (msg: string) =>
  action(GymTypes.EDIT_EXERCISE_ERROR, {msg});
export const editExerciseReset = () => action(GymTypes.EDIT_EXERCISE_RESET);
