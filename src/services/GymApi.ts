import axios, {AxiosResponse} from 'axios';
import User, {Exercise, Training} from 'models/User';
import {CreateUser, AddExercise} from 'models/TypesAux';

const URL: string = 'http://192.168.1.112:3333';

interface ResData {
  msg: string;
  code: number;
  data: User | User[] | Training;
}

class GymApi {
  static async getUsers(): Promise<User[]> {
    try {
      const res: AxiosResponse<ResData> = await axios.get(`${URL}/users`);
      const user: User[] = res.data.data as User[];
      return user;
    } catch (error) {
      console.log(error);
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

  static async removeUser(id: string): Promise<User> {
    try {
      const res: AxiosResponse<ResData> = await axios.delete(
        `${URL}/users/${id}`,
      );
      const user: User = res.data.data as User;
      return user;
    } catch (error) {
      throw error;
    }
  }

  static addTrainingUser = async (id: string, name: string): Promise<User> => {
    try {
      const res: AxiosResponse<ResData> = await axios.patch(
        `${URL}/users/${id}/add/training`,
        {name},
      );
      const user: User = res.data.data as User;
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  static removeTrainingUser = async (
    idUser: string,
    idTraining: string,
  ): Promise<User> => {
    try {
      const res: AxiosResponse<ResData> = await axios.patch(
        `${URL}/users/${idUser}/remove/training/${idTraining}`,
      );
      const user: User = res.data.data as User;
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  static addExerciseTraining = async (
    idTraining: string,
    exercise: Exercise,
  ): Promise<Training> => {
    try {
      const res: AxiosResponse<ResData> = await axios.patch(
        `${URL}/trainings/${idTraining}/add/exercises`,
        exercise,
      );
      const training: Training = res.data.data as Training;
      return training;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  static removeExerciseTraining = async (
    idTraining: string,
    idExercise: string,
  ): Promise<Training> => {
    try {
      const res: AxiosResponse<ResData> = await axios.patch(
        `${URL}/trainings/${idTraining}/remove/exercise/${idExercise}`,
      );
      const training: Training = res.data.data as Training;
      return training;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  static editUser = async (id: string, data: CreateUser): Promise<User> => {
    try {
      const res: AxiosResponse<ResData> = await axios.patch(
        `${URL}/users/${id}`,
        data,
      );
      const user: User = res.data.data as User;
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  static editTraining = async (id: string, name: string): Promise<Training> => {
    try {
      const res: AxiosResponse<ResData> = await axios.patch(
        `${URL}/trainings/${id}`,
        {name},
      );
      const training: Training = res.data.data as Training;
      return training;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  static editExercise = async (
    idTraining: string,
    idExercise: string,
    exercise: AddExercise,
  ): Promise<Training> => {
    try {
      const res: AxiosResponse<ResData> = await axios.patch(
        `${URL}/trainings/${idTraining}/edit/exercise/${idExercise}`,
        exercise,
      );
      const training: Training = res.data.data as Training;
      return training;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default GymApi;
