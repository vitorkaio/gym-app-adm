export enum ERRORS {
  errServer = 'err-server',
}

enum MSG_ERRORS {
  username = 'Username já cadastrado!',
  errServer = 'Erro no servidor. Não foi possível realizar a operação!',
  loginInvalid = 'Login Inválido',
}

class FormatErrors {
  static format(err: string) {
    if (err === null) {
      return MSG_ERRORS.loginInvalid;
    }
    const lisErrsFormts = '' + err.split(' ');
    if (lisErrsFormts.includes('E11000')) {
      if (lisErrsFormts.includes('username_1')) {
        return MSG_ERRORS.username;
      }
      /*  else if (lisErrsFormts.includes("chassis_1")) {
      return MSG_ERRORS.chassis
    }
    else if (lisErrsFormts.includes("renavam_1")) {
      return MSG_ERRORS.renavam
    } */
    } else if (lisErrsFormts.includes('err-server')) {
      return MSG_ERRORS.errServer;
    }

    return err;
  }
}

export default FormatErrors;
