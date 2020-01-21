import {AddExercise} from 'models/TypesAux';

// import {NavigationStackProp} from 'react-navigation-stack';

export interface DispatchProps {
  visibleModalAddExercise: boolean;
  toggleModalAddExercise: () => void;

  addExerciseTrainingLoading: boolean;
  addExerciseTrainingSuccess: boolean;
  addExerciseTrainingErrMsg: string;
  addExerciseTrainingErr: boolean;
  addExerciseTrainingRequest: (exercise: AddExercise) => void;
  addExerciseTrainingReset: () => void;

  // navigation: NavigationStackProp;
}
