import {Training} from 'models/User';

// import {NavigationStackProp} from 'react-navigation-stack';

export interface DispatchProps {
  visibleModalAddTraining: boolean;
  toggleModalAddTraining: () => void;
  resetEditTraining: () => void;

  actionTrainingUserLoading: boolean;
  actionTrainingUserSuccess: boolean;
  actionTrainingUserErrMsg: string;
  actionTrainingUserErr: boolean;
  actionTrainingUserRequest: (name: string) => void;
  actionTrainingUserReset: () => void;

  edit: boolean;
  training: Training | null;

  // navigation: NavigationStackProp;
}
