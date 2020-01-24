export interface CreateUser {
  username?: string;
  password?: string;
  perfil?: string;
  info?: {
    name?: string;
  };
}

export interface AddExercise {
  exercise?: string;
  number?: number;
  weight?: number;
  repetitions?: number;
  time?: number;
  obs?: string;
}

export interface AuthUser {
  username: string;
  password: string;
  id: string;
}

export interface AuthLogin {
  username: string;
  password: string;
}
