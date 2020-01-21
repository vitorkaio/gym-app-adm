import {CreateUser} from 'models/TypesAux';

export interface DispatchProps {
  edit?: boolean;
  editUsername?: string;
  editPassword?: string;
  editName?: string;
  actionUserError: boolean;
  actionUserErrorMsg: string;
  onSubmit: (newStudent: CreateUser) => void;
}

export interface InputDataType {
  data?: string;
  error: boolean;
  errorMsg: string;
}

export interface State {
  usernameState?: InputDataType;
  passwordState?: InputDataType;
  nameState?: InputDataType;
}
