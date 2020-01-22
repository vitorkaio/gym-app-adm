enum MSG_ERRORS {
  username = 'Username já cadastrado!',
  errServer = 'Erro no servidor. Não foi possível acessar os dados!',
}

class FormatErrors {
  static format(err: string) {
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
    }
    if (lisErrsFormts.includes('err-server')) {
      return MSG_ERRORS.errServer;
    }

    return err;
  }
}

export default FormatErrors;
