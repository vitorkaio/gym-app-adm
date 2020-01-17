import {NavigationStackProp} from 'react-navigation-stack';

export interface StateProps {
  removeUserSuccessData: boolean;
  removeUserLoadingData: boolean;
  removeUserErrorData: boolean;
  removeUserErrorMsgData: string;
}

export interface DispatchProps {
  navigation: NavigationStackProp;
  removeUserRequest: (id: string) => void;
  removeUserReset: () => void;
}
