import {NavigationStackProp} from 'react-navigation-stack';
import User from 'models/User';

export interface StateProps {
  removeUserSuccessData: boolean;
  removeUserLoadingData: boolean;
  removeUserErrorData: boolean;
  removeUserErrorMsgData: string;

  addTrainingUserLoadingData: boolean;
  addTrainingUserSuccessData: boolean;
  addTrainingUserErrorData: boolean;
  addTrainingUserErrorMsgData: string;

  users: User[];
}

export interface DispatchProps {
  navigation: NavigationStackProp;
  removeUserRequest: (id: string) => void;
  removeUserReset: () => void;
  updateAddTrainingUserRequest: (id: string, name: string) => void;
  updateAddTrainingUserReset: () => void;
}
