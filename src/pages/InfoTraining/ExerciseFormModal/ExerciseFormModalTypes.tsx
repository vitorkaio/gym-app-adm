import {AddExercise} from 'models/TypesAux';
import {Exercise} from 'models/User';

// import {NavigationStackProp} from 'react-navigation-stack';

export interface State {
  visibleModalAddExercise: boolean;
  actionExerciseTrainingLoading: boolean;
  actionExerciseTrainingSuccess: boolean;
  actionExerciseTrainingErrMsg: string;
  actionExerciseTrainingErr: boolean;

  exercise: Exercise | null;
}

export interface DispatchProps {
  toggleModalAddExercise: () => void;
  actionExerciseTrainingRequest: (exercise: AddExercise) => void;
  actionExerciseTrainingReset: () => void;

  resetEditExercise: () => void;
  // navigation: NavigationStackProp;
}
