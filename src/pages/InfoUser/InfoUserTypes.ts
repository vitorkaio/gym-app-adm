import {NavigationStackProp} from 'react-navigation-stack';
import User from 'models/User';

export interface StateProps {
  addTrainingUserLoadingData: boolean;
  addTrainingUserSuccessData: boolean;
  addTrainingUserErrorData: boolean;
  addTrainingUserErrorMsgData: string;

  removeTrainingUserLoadingData: boolean;
  removeTrainingUserSuccessgData: boolean;
  removeTrainingUserErrorData: boolean;
  removeTrainingUserErrorMsgData: string;

  users: User[];
}

export interface DispatchProps {
  navigation: NavigationStackProp;
  updateAddTrainingUserRequest: (id: string, name: string) => void;
  updateAddTrainingUserReset: () => void;
  removeTrainingUserRequest: (idUser: string, idTraining: string) => void;
  removeTrainingUserReset: () => void;
}
