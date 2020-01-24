import {NavigationStackProp} from 'react-navigation-stack';
import {AuthUser} from 'models/TypesAux';

export interface StateProps {
  authUserData: AuthUser;
}

export interface DispatchProps {
  navigation: NavigationStackProp;
}
