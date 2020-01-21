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
import {DispatchProps} from './ExerciseFormModalTypes';
import Header from 'components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'components/styles/Colors';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
const AddExerciseImage = require('components/styles/assets/exercise.png');
import ExerciseForms from './ExerciseForm/ExerciseForm';
import {AddExercise} from 'models/TypesAux';

type Props = DispatchProps;

const ExerciseFormModal: React.FC<Props> = props => {
  const {
    addExerciseTrainingLoading,
    addExerciseTrainingSuccess,
    addExerciseTrainingErr,
    addExerciseTrainingErrMsg,
    addExerciseTrainingRequest,
    addExerciseTrainingReset,
    visibleModalAddExercise,
    toggleModalAddExercise,
  } = props;

  const navigateGoBack = useCallback(() => {
    addExerciseTrainingReset();
    toggleModalAddExercise();
  }, [addExerciseTrainingReset, toggleModalAddExercise]);

  const addExerciseHandler = (exercise: AddExercise) => {
    addExerciseTrainingRequest(exercise);
  };

  useEffect(() => {
    if (addExerciseTrainingSuccess) {
      navigateGoBack();
    }
  }, [addExerciseTrainingSuccess, navigateGoBack]);

  return (
    <Modal
      visible={visibleModalAddExercise}
      onRequestClose={toggleModalAddExercise}
      animationType="slide"
      transparent={false}>
      <Container>
        <Header title="Adicionar Exercício">
          <TouchableOpacity onPress={toggleModalAddExercise}>
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
              addExerciseError={addExerciseTrainingErr}
              addExerciseErrorMsg={addExerciseTrainingErrMsg}
            />
          </Forms>
        </Content>
        {addExerciseTrainingLoading && (
          <LoadingDialog title="Adicionando Exercício" />
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
