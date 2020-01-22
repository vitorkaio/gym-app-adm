import React, {useEffect, useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Modal,
  Container,
  TouchableOpacity,
  Content,
  Forms,
  ImageInput,
} from './TrainingFormModalStyle';
import {DispatchProps} from './TrainingFormModalTypes';
import Header from 'components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'components/styles/Colors';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
import TrainingForms from './TrainingForm/TrainingForm';
const AddTrainingImage = require('components/styles/assets/training_wall.png');

type Props = DispatchProps;

const AddTrainingUserModal: React.FC<Props> = props => {
  const {
    actionTrainingUserLoading,
    actionTrainingUserSuccess,
    actionTrainingUserErr,
    actionTrainingUserErrMsg,
    visibleModalAddTraining,
    toggleModalAddTraining,
    actionTrainingUserRequest,
    actionTrainingUserReset,
    training,
    resetEditTraining,
  } = props;

  const navigateGoBack = useCallback(() => {
    if (training) {
      resetEditTraining();
    }
    actionTrainingUserReset();
    toggleModalAddTraining();
  }, [
    actionTrainingUserReset,
    resetEditTraining,
    toggleModalAddTraining,
    training,
  ]);

  const addUserHandler = (name: string) => {
    actionTrainingUserRequest(name);
  };

  const closeArrowLeft = () => {
    resetEditTraining();
    toggleModalAddTraining();
  };

  useEffect(() => {
    if (actionTrainingUserSuccess) {
      navigateGoBack();
    }
  }, [actionTrainingUserSuccess, navigateGoBack]);

  return (
    <Modal
      visible={visibleModalAddTraining}
      onRequestClose={closeArrowLeft}
      animationType="slide"
      transparent={false}>
      <Container>
        <Header title={training ? 'Editar Treino' : 'Adicionar Treino'}>
          <TouchableOpacity onPress={closeArrowLeft}>
            <Icon name="arrow-left" size={25} color={Colors.primary_color} />
          </TouchableOpacity>
          {null}
        </Header>
        <Content>
          <Forms>
            <ImageInput>
              <Image source={AddTrainingImage} style={styles.image} />
            </ImageInput>
            <TrainingForms
              onSubmit={addUserHandler}
              trainingError={actionTrainingUserErr}
              trainingErrorMsg={actionTrainingUserErrMsg}
              edit={training ? true : false}
              editName={training ? training.name : ''}
            />
          </Forms>
        </Content>
        {actionTrainingUserLoading && (
          <LoadingDialog
            title={training ? 'Editando Treino' : 'Adicionando Treino'}
          />
        )}
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default AddTrainingUserModal;
