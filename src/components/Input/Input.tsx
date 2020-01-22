import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, Label, TextInput, Error, LabelError} from './InputStyle';
import {DispatchProps} from './InputType';

type Props = DispatchProps;

const Input: React.FC<Props> = props => {
  const {
    onInputChange,
    id,
    label,
    value,
    keyboardType,
    errorText,
    secureTextEntry,
  } = props;
  const textChangeHandler = (text: string) => {
    onInputChange(id, text);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        style={InputStyle.container}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={textChangeHandler}
        value={value}
        errorText={errorText?.length !== 0 ? true : false}
      />
      <Error>
        <LabelError>{errorText}</LabelError>
      </Error>
    </Container>
  );
};

const InputStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Input;
