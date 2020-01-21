import {NavigationStackProp} from 'react-navigation-stack';
import User from 'models/User';
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
}

export interface DispatchProps {
  navigation: NavigationStackProp;
}
