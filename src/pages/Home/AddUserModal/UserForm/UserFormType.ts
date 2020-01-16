import {CreateUser} from 'models/TypesAux';

export interface DispatchProps {
  edit?: boolean;
  editUsername?: string;
  editPassword?: string;
  editName?: string;
  createUserError: boolean;
  createUserErrorMsg: string;
  loading: boolean;
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
