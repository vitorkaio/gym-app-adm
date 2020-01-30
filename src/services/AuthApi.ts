import axios, {AxiosResponse} from 'axios';
import {AuthLogin, AuthUser} from 'models/TypesAux';
import {ERRORS} from './FormatErrors';

// const URL: string = 'http://192.168.1.112:3333';
const URL: string = 'https://intense-hamlet-46083.herokuapp.com';

interface ResData {
  msg: string;
  code: number;
  data: AuthUser | string;
}

interface ResErrorData {
  response: {
    data: {
      msg: string;
      code: number;
      data: AuthUser | string;
    };
  };
}

class AuthApi {
  static login = async (authLogin: AuthLogin): Promise<AuthUser> => {
    try {
      const res: AxiosResponse<ResData> = await axios.post(
        `${URL}/auth/loginadm`,
        {...authLogin},
      );
      const authUserId = res.data.data as string;
      const authUser: AuthUser = {
        id: authUserId,
        username: authLogin.username,
        password: authLogin.password,
      };
      return authUser;
    } catch (error) {
      const err: ResErrorData = error;
      throw err.response === undefined
        ? ERRORS.errServer
        : err.response.data.data;
    }
  };
}

export default AuthApi;
