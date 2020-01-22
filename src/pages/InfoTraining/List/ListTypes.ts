import {Exercise} from 'models/User';

export interface DispatchProps {
  data: Exercise[];
  removeExerciseTrainingUserHandler: (idExercise: string) => void;
  editExerciseHandler: (exercise: Exercise) => void;
}
