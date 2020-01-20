import React, {useEffect, useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Modal,
  Container,
  TouchableOpacity,
  Content,
  Forms,
  ImageInput,
} from './AddUserModalStyle';
import {DispatchProps} from './AddUserModalTypes';
import Header from 'components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'components/styles/Colors';
import UserForms from './UserForm/UserForm';
import {CreateUser} from 'models/TypesAux';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
const AddUserImage = require('components/styles/assets/add_user_wall.png');

type Props = DispatchProps;

const AddUserModal: React.FC<Props> = props => {
  const {
    visibleModalUser,
    toggleModalUser,
    createUserLoading,
    createUserErr,
    createUserMsg,
    createUserRequest,
    createUserReset,
  } = props;

  const navigateGoBack = useCallback(() => {
    createUserReset();
    toggleModalUser();
  }, [createUserReset, toggleModalUser]);

  const addUserHandler = (student: CreateUser) => {
    console.log(student);
    createUserRequest(student);
  };

  useEffect(() => {
    if (createUserMsg === 'success') {
      navigateGoBack();
    }
  }, [createUserMsg, navigateGoBack]);

  return (
    <Modal
      visible={visibleModalUser}
      onRequestClose={toggleModalUser}
      animationType="slide"
      transparent={false}>
      <Container>
        <Header title="Adicionar Aluno">
          <TouchableOpacity onPress={toggleModalUser}>
            <Icon name="arrow-left" size={25} color={Colors.primary_color} />
          </TouchableOpacity>
          {null}
        </Header>
        <Content>
          <Forms>
            <ImageInput>
              <Image source={AddUserImage} style={AddUserModalStyle.image} />
            </ImageInput>
            <UserForms
              onSubmit={addUserHandler}
              createUserError={createUserErr}
              createUserErrorMsg={createUserMsg}
            />
          </Forms>
        </Content>
        {createUserLoading && <LoadingDialog title="Adicionando Usuário" />}
      </Container>
    </Modal>
  );
};

const AddUserModalStyle = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
  },
});

export default AddUserModal;
