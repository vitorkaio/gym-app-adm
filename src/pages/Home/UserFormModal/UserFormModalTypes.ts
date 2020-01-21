import {CreateUser} from 'models/TypesAux';
// import {NavigationStackProp} from 'react-navigation-stack';

export interface DispatchProps {
  visibleModalUser: boolean;
  toggleModalUser: () => void;

  actionUserLoading: boolean;
  actionUserSuccess: boolean;
  actionUserMsg: string;
  actionUserErr: boolean;

  actionUserRequest: (newUser: CreateUser) => void;
  actionUserReset: () => void;
  resetEdituser: () => void;

  edit: boolean;
  user: CreateUser | null;

  // navigation: NavigationStackProp;
}
