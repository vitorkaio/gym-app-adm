import {action} from 'typesafe-actions';

import User from 'models/User';
import {GymTypes} from './types';

export const usersRequest = () => action(GymTypes.USER_REQUEST);

export const userSuccess = (users: User[]) =>
  action(GymTypes.USER_SUCCCES, {users});

export const userError = () => action(GymTypes.USER_ERROR);
