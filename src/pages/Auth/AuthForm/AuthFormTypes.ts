import {AuthLogin} from 'models/TypesAux';

export interface DispatchProps {
  onSubmit: (authLogin: AuthLogin) => void;
}

export interface InputDataType {
  data?: string;
  error: boolean;
  errorMsg: string;
}

export interface State {
  nameState?: InputDataType;
  edit?: boolean;
  ediUsername?: string;
  ediPassword?: string;
  authUserError: boolean;
  authUserErrorMsg: string;
}
