import {CreateUser} from 'models/TypesAux';
import {NavigationStackProp} from 'react-navigation-stack';
import User from 'models/User';

export interface StateProps {
  usersLoadingData: boolean;
  usersData: User[];
  usersErrorData: boolean;

  createUserLoadingData: boolean;
  createUserSuccessData: boolean;
  createUserErrorMsgData: string;
  createUserErrorData: boolean;

  removeUserSuccessDatas: boolean;
  removeUserLoadingData: boolean;
  removeUserErrorData: boolean;
  removeUserErrorMsgData: string;

  editUserLoadingData: boolean;
  editUserSuccessData: boolean;
  editUserErrorData: boolean;
  editUserErrorMsgData: string;
}

export interface DispatchProps {
  usersRequest(): void;
  createUserRequest: (newUser: CreateUser) => void;
  createUserReset: () => void;

  removeUserRequest: (id: string) => void;
  removeUserReset: () => void;

  editUserRequest: (id: string, user: CreateUser) => void;
  editUserReset: () => void;

  navigation: NavigationStackProp;
}
