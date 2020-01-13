import User from 'models/User';

export interface DispatchProps {
  data: User[];
  select: Function;
}
