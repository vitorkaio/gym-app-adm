import {Training} from 'models/User';

export interface DispatchProps {
  data: Training[];
  select: (training: Training) => void;
  removeTrainingUserHandler: (idTraining: string) => void;
  editTrainingHandler: (training: Training) => void;
}
