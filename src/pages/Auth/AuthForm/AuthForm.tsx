import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import FooterButton from 'components/FooterButton/FooterButton';
import {
  Container,
  Forms,
  InputData,
  Input,
  InputDataError,
  TextError,
} from './AuthFormStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import produce from 'immer';
import {DispatchProps, State, InputDataType} from './AuthFormTypes';
import {AuthLogin} from 'models/TypesAux';
import Colors from 'components/styles/Colors';

type Props = DispatchProps & State;

const AuthForms: React.FC<Props> = props => {
  const [username, setUsernameName] = useState<InputDataType>({
    data: props.edit ? props.ediUsername : '',
    error: false,
    errorMsg: '',
  });

  const [password, setPassword] = useState<InputDataType>({
    data: props.edit ? props.ediPassword : '',
    error: false,
    errorMsg: '',
  });

  const [error, setError] = useState(false);
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (props.authUserError) {
      setError(props.authUserError);
    }
  }, [props.authUserError]);

  const inputChangeHandler = useCallback(
    (id: string, data: string) => {
      setValidForm(false);
      setError(false);
      switch (id) {
        case 'username':
          const nextDataname = produce(username, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setUsernameName(nextDataname);
          break;

        case 'password':
          const nextDatapassword = produce(password, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setPassword(nextDatapassword);
          break;

        default:
          break;
      }
    },
    [password, username],
  );

  const validateForm = useCallback(() => {
    let valid = true;

    if (username.data!.trim().length === 0) {
      const nextData = produce(username, draft => {
        draft.error = true;
        draft.errorMsg = 'Digite algo!';
      });
      valid = false;
      setUsernameName(nextData);
    }

    if (password.data!.trim().length === 0) {
      const nextData = produce(password, draft => {
        draft.error = true;
        draft.errorMsg = 'Digite algo!';
      });
      valid = false;
      setPassword(nextData);
    }

    if (valid) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [password, username]);

  const submit = useCallback(() => {
    if (username.error === false && password.error === false) {
      const newAuthLogin: AuthLogin = {
        username: username.data ? username.data : '',
        password: password.data ? password.data : '',
      };
      props.onSubmit(newAuthLogin);
      setValidForm(false);
    }
  }, [password.data, password.error, props, username.data, username.error]);

  useEffect(() => {
    if (validForm) {
      submit();
    }
  }, [submit, validForm]);

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Forms>
          <InputData style={styles.InputDataLogin}>
            <Input
              keyboardType="default"
              onChangeText={(val: string) =>
                inputChangeHandler('username', val)
              }
              value={username.data}
              placeholder="Digite o Login"
              placeholderTextColor={Colors.primary_color}
              errorLogin={error}
            />
          </InputData>

          <InputData style={styles.InputDataPassword}>
            <Input
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(val: string) =>
                inputChangeHandler('password', val)
              }
              value={password.data}
              placeholder="Digite a Senha"
              placeholderTextColor={Colors.primary_color}
              errorLogin={error}
            />
          </InputData>

          {error && (
            <InputDataError style={styles.InputDataLogin}>
              <TextError>{props.authUserErrorMsg}</TextError>
            </InputDataError>
          )}

          <InputData style={styles.InputDataPassword}>
            <FooterButton clickHandler={validateForm} text="Entrar" />
          </InputData>
        </Forms>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  InputDataLogin: {
    width: '80%',
    marginTop: 10,
  },
  InputDataPassword: {
    width: '80%',
    marginTop: 30,
  },
});

export default AuthForms;
