// import {NavigationStackProp} from 'react-navigation-stack';

export interface DispatchProps {
  visibleModalAddTraining: boolean;
  toggleModalAddTraining: () => void;

  addTrainingUserLoading: boolean;
  addTrainingUserSuccess: boolean;
  addTrainingUserErrMsg: string;
  addTrainingUserErr: boolean;
  addTrainingUserRequest: (name: string) => void;
  addTrainingUserReset: () => void;

  // navigation: NavigationStackProp;
}
