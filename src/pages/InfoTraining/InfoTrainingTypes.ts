import {NavigationStackProp} from 'react-navigation-stack';
import User, {Exercise} from 'models/User';
import {AddExercise} from 'models/TypesAux';

export interface StateProps {
  users: User[];
  addExerciseTrainingLoadingData: boolean;
  addExerciseTrainingSuccessData: boolean;
  addExerciseTrainingErrorData: boolean;
  addExerciseTrainingErrorMsgData: string;

  removeExerciseTrainingLoadingData: boolean;
  removeExerciseTrainingSuccessData: boolean;
  removeExerciseTrainingErrorData: boolean;
  removeExerciseTrainingErrorMsgData: string;

  editExerciseLoadingData: boolean;
  editExerciseSuccessData: boolean;
  editExerciseErrorData: boolean;
  editExerciseErrorMsgData: string;
}

export interface DispatchProps {
  navigation: NavigationStackProp;
  addExerciseTrainingRequest: (
    idTraining: string,
    exercise: AddExercise,
  ) => void;
  addExerciseTrainingReset: () => void;

  removeExerciseTrainingRequest: (
    idTraining: string,
    idExercise: string,
  ) => void;
  removeExerciseTrainingReset: () => void;

  editExerciseRequest: (
    idTraining: string,
    idExercise: string,
    exercise: AddExercise,
  ) => void;
  editExerciseReset: () => void;
}
