import {CreateUser} from 'models/TypesAux';
// import {NavigationStackProp} from 'react-navigation-stack';

export interface DispatchProps {
  visibleModalUser: boolean;
  toggleModalUser: () => void;

  createUserLoading: boolean;
  createUserMsg: string;
  createUserErr: boolean;
  createUserRequest: (newUser: CreateUser) => void;
  createUserReset: () => void;

  // navigation: NavigationStackProp;
}
