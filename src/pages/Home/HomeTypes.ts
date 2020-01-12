import {GymState} from 'store/modules/gym/types';

export interface StateProps {
  gymReducer: GymState;
}

export interface DispatchProps {
  usersRequest(): void;
}
