export interface CreateUser {
  username: string;
  password: string;
  perfil: string;
  info: {
    name: string;
  };
}
