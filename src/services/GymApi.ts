import axios, {AxiosResponse} from 'axios';
import User from 'models/User';

const URL: string = 'http://192.168.1.112:3333';

interface ResData {
  msg: string;
  code: number;
  data: User[];
}

class GymApi {
  static async getUsers(): Promise<User[]> {
    try {
      const res: AxiosResponse<ResData> = await axios.get(`${URL}/users`);
      const user: User[] = res.data.data;
      console.log(user);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default GymApi;
