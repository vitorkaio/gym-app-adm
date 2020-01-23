import React, {useState, useEffect, useCallback} from 'react';
import FooterButton from 'components/FooterButton/FooterButton';
import {
  Container,
  Forms,
  InputData,
  FormsNumbersInputData,
} from './ExerciseFormStyle';
import Input from 'components/Input/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import produce from 'immer';
import {DispatchProps, State, InputDataType} from './ExerciseFormTypes';

type Props = DispatchProps & State;

const ExerciseForms: React.FC<Props> = props => {
  const [exercise, setExercise] = useState<InputDataType>({
    data: props.edit ? props.editExercise : '',
    error: false,
    errorMsg: '',
  });

  const [number, setNumber] = useState<InputDataType>({
    data: props.edit ? props.editNumber : '',
    error: false,
    errorMsg: '',
  });

  const [weight, setWeight] = useState<InputDataType>({
    data: props.edit ? props.editWeight : '',
    error: false,
    errorMsg: '',
  });

  const [repetitions, setRepetitions] = useState<InputDataType>({
    data: props.edit ? props.editRepetitions : '',
    error: false,
    errorMsg: '',
  });

  const [time, setTime] = useState<InputDataType>({
    data: props.edit ? props.editTime : '',
    error: false,
    errorMsg: '',
  });

  const [obs, setObs] = useState<InputDataType>({
    data: props.edit ? props.editObs : '',
    error: false,
    errorMsg: '',
  });

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (validForm) {
      submit();
    }
  }, [validForm]);

  useEffect(() => {
    if (props.exerciseError) {
      setExercise(prev => {
        return produce(prev, draft => {
          draft.error = true;
          draft.errorMsg = props.exerciseErrorMsg;
        });
      });
    }
  }, [props.exerciseError]);

  const inputChangeHandler = useCallback(
    (id, data) => {
      setValidForm(false);
      switch (id) {
        case 'exercise':
          const nextDataExercise = produce(exercise, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setExercise(nextDataExercise);
          break;

        case 'number':
          const nextDataNumber = produce(number, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setNumber(nextDataNumber);
          break;

        case 'weight':
          const nextDataWeight = produce(weight, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setWeight(nextDataWeight);
          break;

        case 'repetitions':
          const nextDataRepetitions = produce(repetitions, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setRepetitions(nextDataRepetitions);
          break;

        case 'time':
          const nextDataTime = produce(time, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setTime(nextDataTime);
          break;

        case 'obs':
          const nextDataObs = produce(obs, draft => {
            draft.data = data;
            draft.error = false;
            draft.errorMsg = '';
          });
          setObs(nextDataObs);
          break;

        default:
          break;
      }
    },
    [exercise, number, weight, repetitions, time, obs],
  );

  const validateForm = useCallback(() => {
    let valid = true;

    if (exercise.data!.trim().length === 0) {
      const nextData = produce(exercise, draft => {
        draft.error = true;
        draft.errorMsg = 'Digite algo!';
      });
      valid = false;
      setExercise(nextData);
    }

    if (valid) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [exercise]);

  const submit = useCallback(() => {
    if (
      exercise.error === false &&
      number.error === false &&
      weight.error === false &&
      repetitions.error === false &&
      time.error === false &&
      obs.error === false
    ) {
      const newExercise = {
        exercise: exercise.data,
        number: parseInt(number?.data ? number.data : '0', 10),
        weight: parseInt(weight?.data ? weight.data : '0', 10),
        repetitions: parseInt(repetitions?.data ? repetitions.data : '0', 10),
        time: parseInt(time?.data ? time.data : '0', 10),
        obs: obs?.data ? obs.data : '',
      };
      // resetFields();
      props.onSubmit(newExercise);
    }
  }, [
    exercise.data,
    exercise.error,
    number.data,
    number.error,
    obs.data,
    obs.error,
    props,
    repetitions.data,
    repetitions.error,
    time.data,
    time.error,
    weight.data,
    weight.error,
  ]);

  const resetFields = () => {
    const nextDataExercise = produce(exercise, draft => {
      draft.data = '';
      draft.error = false;
      draft.errorMsg = '';
    });
    setExercise(nextDataExercise);
    const nextDataNumber = produce(number, draft => {
      draft.data = '';
      draft.error = false;
      draft.errorMsg = '';
    });
    setNumber(nextDataNumber);
    const nextDataWeight = produce(weight, draft => {
      draft.data = '';
      draft.error = false;
      draft.errorMsg = '';
    });
    setWeight(nextDataWeight);
    const nextDataRepetitions = produce(repetitions, draft => {
      draft.data = '';
      draft.error = false;
      draft.errorMsg = '';
    });
    setRepetitions(nextDataRepetitions);
    const nextDataTime = produce(time, draft => {
      draft.data = '';
      draft.error = false;
      draft.errorMsg = '';
    });
    setTime(nextDataTime);
    const nextDataObs = produce(obs, draft => {
      draft.data = '';
      draft.error = false;
      draft.errorMsg = '';
    });
    setObs(nextDataObs);
  };

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Forms>
          <InputData style={{width: '90%'}}>
            <Input
              label="Exercício"
              keyboardType="default"
              onInputChange={inputChangeHandler}
              id="exercise"
              errorText={exercise.errorMsg}
              value={exercise.data}
            />
          </InputData>

          <FormsNumbersInputData>
            <InputData style={{width: '20%'}}>
              <Input
                label="Séries"
                keyboardType="number-pad"
                onInputChange={inputChangeHandler}
                id="number"
                errorText={number.errorMsg}
                value={number.data}
              />
            </InputData>

            <InputData style={{width: '20%'}}>
              <Input
                label="Repetições"
                keyboardType="number-pad"
                onInputChange={inputChangeHandler}
                id="repetitions"
                errorText={repetitions.errorMsg}
                value={repetitions.data}
              />
            </InputData>

            <InputData style={{width: '20%'}}>
              <Input
                label="Peso"
                keyboardType="number-pad"
                onInputChange={inputChangeHandler}
                id="weight"
                errorText={weight.errorMsg}
                value={weight.data}
              />
            </InputData>

            <InputData style={{width: '20%'}}>
              <Input
                label="Tempo"
                keyboardType="number-pad"
                onInputChange={inputChangeHandler}
                id="time"
                errorText={time.errorMsg}
                value={time.data}
              />
            </InputData>
          </FormsNumbersInputData>

          <InputData style={{width: '90%'}}>
            <Input
              label="Obs"
              multiline
              numberOfLines={4}
              editable
              textAlignVertical="top"
              keyboardType="default"
              onInputChange={inputChangeHandler}
              id="obs"
              errorText={obs.errorMsg}
              value={obs.data}
            />
          </InputData>

          <InputData style={{width: '90%'}}>
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

export default ExerciseForms;
