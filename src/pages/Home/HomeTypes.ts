import {CreateUser} from 'models/TypesAux';
import {NavigationStackProp} from 'react-navigation-stack';
import User from 'models/User';

export interface StateProps {
  usersLoading: boolean;
  users: User[];
  usersError: boolean;

  createUserLoadingData: boolean;
  createUserMsgData: string;
  createUserErrorData: boolean;
}

export interface DispatchProps {
  usersRequest(): void;
  createUserRequest: (newUser: CreateUser) => void;
  createUserReset: () => void;

  navigation: NavigationStackProp;
}
