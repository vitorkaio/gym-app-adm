import {GymState} from 'store/modules/gym/types';
import {CreateUser} from 'models/TypesAux';

export interface StateProps {
  gymReducer: GymState;
}

export interface DispatchProps {
  usersRequest(): void;
  createUserRequest: (newUser: CreateUser) => void;
  createUserReset: () => void;
}
