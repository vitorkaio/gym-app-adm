import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import FooterButton from 'components/FooterButton/FooterButton';
import {Container, Forms, InputData} from './UserFormStyle';
import Input from 'components/Input/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import produce from 'immer';
import {DispatchProps, State, InputDataType} from './UserFormType';
import {CreateUser} from 'models/TypesAux';

type Props = DispatchProps & State;

const UserForms: React.FC<Props> = props => {
  const [username, setUsername] = useState<InputDataType>({
    data: props.edit ? props.editUsername : '',
    error: false,
    errorMsg: '',
  });

  const [password, setPassword] = useState<InputDataType>({
    data: props.edit ? props.editPassword : '',
    error: false,
    errorMsg: '',
  });

  const [name, setName] = useState<InputDataType>({
    data: props.edit ? props.editName : '',
    error: false,
    errorMsg: '',
  });

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    console.log(props.createUserError);
    if (props.createUserError) {
      const nextData = produce(username, draft => {
        draft.error = true;
        draft.errorMsg = props.createUserErrorMsg;
      });
      setUsername(nextData);
    }
  }, [props.createUserError, props.createUserErrorMsg, username]);

  const inputChangeHandler = useCallback(
    (id, data) => {
      setValidForm(false);
      switch (id) {
        case 'username':
          const nextDataUsername = produce(username, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setUsername(nextDataUsername);
          break;

        case 'password':
          const nextDataPassword = produce(password, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setPassword(nextDataPassword);
          break;

        case 'name':
          const nextDataname = produce(name, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setName(nextDataname);
          break;

        default:
          break;
      }
    },
    [username, password, name],
  );

  const validateForm = useCallback(() => {
    let valid = true;

    if (username.data!.trim().length === 0) {
      const nextData = produce(username, draft => {
        draft.error = true;
        draft.errorMsg = 'Digite algo!';
      });
      valid = false;
      setUsername(nextData);
    }
    if (password.data!.trim().length === 0) {
      const nextData = produce(password, draft => {
        draft.error = true;
        draft.errorMsg = 'Digite algo!';
      });
      valid = false;
      setPassword(nextData);
    } else if (password.data!.trim().length < 4) {
      const nextData = produce(password, draft => {
        draft.error = true;
        draft.errorMsg = 'Senha tem que ter no mínimo 4 dígitos';
      });
      valid = false;
      setPassword(nextData);
    }

    if (name.data!.trim().length === 0) {
      const nextData = produce(name, draft => {
        draft.error = true;
        draft.errorMsg = 'Digite algo!';
      });
      valid = false;
      setName(nextData);
    }

    if (valid) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [username, password, name]);

  const submit = useCallback(() => {
    if (
      username.error === false &&
      password.error === false &&
      name.error === false
    ) {
      const newStudent: CreateUser = {
        username: username.data,
        password: password.data,
        info: {
          name: name.data,
        },
      };
      props.onSubmit(newStudent);
      setValidForm(false);
    }
  }, [
    name.data,
    name.error,
    password.data,
    password.error,
    props,
    username.data,
    username.error,
  ]);

  useEffect(() => {
    if (validForm) {
      submit();
    }
  }, [submit, validForm]);

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Forms>
          <InputData style={UserFormStyle.InputData}>
            <Input
              label="Username"
              keyboardType="default"
              onInputChange={inputChangeHandler}
              id="username"
              errorText={username.errorMsg}
              value={username.data}
            />
          </InputData>
          <InputData style={UserFormStyle.InputData}>
            <Input
              label="Senha"
              keyboardType="default"
              secureTextEntry={true}
              onInputChange={inputChangeHandler}
              id="password"
              errorText={password.errorMsg}
              value={password.data}
            />
          </InputData>
          <InputData style={UserFormStyle.InputData}>
            <Input
              label="Nome Completo"
              keyboardType="default"
              onInputChange={inputChangeHandler}
              id="name"
              errorText={name.errorMsg}
              value={name.data}
            />
          </InputData>
        </Forms>
      </KeyboardAwareScrollView>
      <FooterButton clickHandler={validateForm} text="Adicionar" />
    </Container>
  );
};

const UserFormStyle = StyleSheet.create({
  InputData: {
    width: '80%',
  },
});

export default UserForms;
