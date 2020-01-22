import React, {useEffect, useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Modal,
  Container,
  TouchableOpacity,
  Content,
  Forms,
  ImageInput,
} from './ExerciseFormModalStyle';
import {DispatchProps, State} from './ExerciseFormModalTypes';
import Header from 'components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'components/styles/Colors';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
const AddExerciseImage = require('components/styles/assets/exercise.png');
import ExerciseForms from './ExerciseForm/ExerciseForm';
import {AddExercise} from 'models/TypesAux';

type Props = DispatchProps & State;

const ExerciseFormModal: React.FC<Props> = props => {
  const {
    actionExerciseTrainingLoading,
    actionExerciseTrainingSuccess,
    actionExerciseTrainingErr,
    actionExerciseTrainingErrMsg,
    actionExerciseTrainingRequest,
    actionExerciseTrainingReset,
    visibleModalAddExercise,
    toggleModalAddExercise,
    exercise,
    resetEditExercise,
  } = props;

  const navigateGoBack = useCallback(() => {
    if (exercise) {
      resetEditExercise();
    }
    actionExerciseTrainingReset();
    toggleModalAddExercise();
  }, [
    actionExerciseTrainingReset,
    exercise,
    resetEditExercise,
    toggleModalAddExercise,
  ]);

  const addExerciseHandler = (newExercise: AddExercise) => {
    actionExerciseTrainingRequest(newExercise);
  };

  const closeArrowLeft = () => {
    resetEditExercise();
    toggleModalAddExercise();
  };

  useEffect(() => {
    if (actionExerciseTrainingSuccess) {
      navigateGoBack();
    }
  }, [actionExerciseTrainingSuccess, navigateGoBack]);

  return (
    <Modal
      visible={visibleModalAddExercise}
      onRequestClose={closeArrowLeft}
      animationType="slide"
      transparent={false}>
      <Container>
        <Header title="Adicionar Exercício">
          <TouchableOpacity onPress={closeArrowLeft}>
            <Icon name="arrow-left" size={25} color={Colors.primary_color} />
          </TouchableOpacity>
          {null}
        </Header>
        <Content>
          <Forms>
            <ImageInput>
              <Image source={AddExerciseImage} style={styles.image} />
            </ImageInput>
            <ExerciseForms
              onSubmit={addExerciseHandler}
              exerciseError={actionExerciseTrainingErr}
              exerciseErrorMsg={actionExerciseTrainingErrMsg}
              edit={exercise ? true : false}
              editExercise={exercise ? exercise.exercise : ''}
              editNumber={exercise ? exercise.number.toString() : ''}
              editRepetitions={exercise ? exercise.repetitions.toString() : ''}
              editWeight={exercise ? exercise.weight.toString() : ''}
              editTime={exercise ? exercise.time.toString() : ''}
              editObs={exercise ? exercise.obs : ''}
            />
          </Forms>
        </Content>
        {actionExerciseTrainingLoading && (
          <LoadingDialog
            title={exercise ? 'Editando Exercício' : 'Adicionando Exercício'}
          />
        )}
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});

export default ExerciseFormModal;
