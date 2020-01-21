import {AddExercise} from 'models/TypesAux';

export interface DispatchProps {
  edit?: boolean;
  editExercise?: string;
  editNumber?: string;
  editWeight?: string;
  editRepetitions?: string;
  editTime?: string;
  editObs?: string;

  addExerciseError: boolean;
  addExerciseErrorMsg: string;
  onSubmit: (newExercise: AddExercise) => void;
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
