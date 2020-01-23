import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import FooterButton from 'components/FooterButton/FooterButton';
import {Container, Forms, InputData} from './TrainingFormStyle';
import Input from 'components/Input/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import produce from 'immer';
import {DispatchProps, State, InputDataType} from './TrainingFormTypes';

type Props = DispatchProps & State;

const TrainingForms: React.FC<Props> = props => {
  const [name, setName] = useState<InputDataType>({
    data: props.edit ? props.editName : '',
    error: false,
    errorMsg: '',
  });

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (props.trainingError) {
      setName(prev => {
        return produce(prev, draft => {
          draft.error = true;
          draft.errorMsg = props.trainingErrorMsg;
        });
      });
    }
  }, [props.trainingError, props.trainingErrorMsg]);

  const inputChangeHandler = useCallback(
    (id, data) => {
      setValidForm(false);
      switch (id) {
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
    [name],
  );

  const validateForm = useCallback(() => {
    let valid = true;

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
  }, [name]);

  const submit = useCallback(() => {
    if (name.error === false) {
      props.onSubmit(name.data ? name.data : '');
      setValidForm(false);
    }
  }, [name, props]);

  useEffect(() => {
    if (validForm) {
      submit();
    }
  }, [submit, validForm]);

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Forms>
          <InputData style={styles.InputData}>
            <Input
              label="Nome do Treino"
              keyboardType="default"
              onInputChange={inputChangeHandler}
              id="name"
              errorText={name.errorMsg}
              value={name.data}
            />
          </InputData>

          <InputData style={styles.InputData}>
            <FooterButton
              clickHandler={validateForm}
              text={props.edit ? 'Editar' : 'Adicionar'}
            />
          </InputData>
        </Forms>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  InputData: {
    width: '80%',
  },
});

export default TrainingForms;
