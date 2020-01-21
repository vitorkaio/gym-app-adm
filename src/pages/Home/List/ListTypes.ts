import User from 'models/User';

export interface DispatchProps {
  data: User[];
  select: (user: User) => void;
  removeUserHandler: (id: string) => void;
}
