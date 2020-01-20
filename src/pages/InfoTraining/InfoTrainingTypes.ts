import {NavigationStackProp} from 'react-navigation-stack';
import User from 'models/User';

export interface StateProps {
  users: User[];
}

export interface DispatchProps {
  navigation: NavigationStackProp;
}
