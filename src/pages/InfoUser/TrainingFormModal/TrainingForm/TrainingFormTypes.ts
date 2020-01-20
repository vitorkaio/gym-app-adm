export interface DispatchProps {
  edit?: boolean;
  editName?: string;
  trainingError: boolean;
  trainingErrorMsg: string;
  onSubmit: (name: string) => void;
}

export interface InputDataType {
  data?: string;
  error: boolean;
  errorMsg: string;
}

export interface State {
  nameState?: InputDataType;
}
