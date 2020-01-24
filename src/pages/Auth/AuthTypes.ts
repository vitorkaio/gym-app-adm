import {NavigationStackProp} from 'react-navigation-stack';
import {AuthUser, AuthLogin} from 'models/TypesAux';

export interface State {
  authUserData: AuthUser | null;
  authUserLoadingData: boolean;
  authUserErrorData: boolean;
  authUserErrorMsgData: string;

  navigation: NavigationStackProp;
}

export interface DispatchProps {
  authUserRequest: (authLogin: AuthLogin) => void;
  authUserReset: () => void;
}
