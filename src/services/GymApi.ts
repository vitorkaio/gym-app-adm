import axios, {AxiosResponse} from 'axios';
import User from 'models/User';
import {CreateUser} from 'models/TypesAux';

const URL: string = 'http://192.168.1.112:3333';

interface ResData {
  msg: string;
  code: number;
  data: User | User[];
}

class GymApi {
  static async getUsers(): Promise<User[]> {
    try {
      const res: AxiosResponse<ResData> = await axios.get(`${URL}/users`);
      const user: User[] = res.data.data as User[];
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async createUser(newUser: CreateUser): Promise<User> {
    try {
      const res: AxiosResponse<ResData> = await axios.post(
        `${URL}/users`,
        newUser,
      );
      const user: User = res.data.data as User;
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default GymApi;
