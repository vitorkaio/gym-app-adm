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

const AddUserModal: React.FC<Props> = props => {
  const {
    addTrainingUserLoading,
    addTrainingUserSuccess,
    addTrainingUserErr,
    addTrainingUserErrMsg,
    visibleModalAddTraining,
    toggleModalAddTraining,
    addTrainingUserRequest,
    addTrainingUserReset,
  } = props;

  const navigateGoBack = useCallback(() => {
    addTrainingUserReset();
    toggleModalAddTraining();
  }, [addTrainingUserReset, toggleModalAddTraining]);

  const addUserHandler = (name: string) => {
    addTrainingUserRequest(name);
  };

  useEffect(() => {
    if (addTrainingUserSuccess) {
      navigateGoBack();
    }
  }, [addTrainingUserSuccess, navigateGoBack]);

  return (
    <Modal
      visible={visibleModalAddTraining}
      onRequestClose={toggleModalAddTraining}
      animationType="slide"
      transparent={false}>
      <Container>
        <Header title="Adicionar Treino">
          <TouchableOpacity onPress={toggleModalAddTraining}>
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
              trainingError={addTrainingUserErr}
              trainingErrorMsg={addTrainingUserErrMsg}
            />
          </Forms>
        </Content>
        {addTrainingUserLoading && <LoadingDialog title="Adicionando Treino" />}
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

export default AddUserModal;
