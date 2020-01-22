import React, {useEffect, useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Modal,
  Container,
  TouchableOpacity,
  Content,
  Forms,
  ImageInput,
} from './UserFormModalStyle';
import {DispatchProps} from './UserFormModalTypes';
import Header from 'components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'components/styles/Colors';
import UserForms from './UserForm/UserForm';
import {CreateUser} from 'models/TypesAux';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
const AddUserImage = require('components/styles/assets/add_user_wall.png');
import InfoDialog from 'components/Dialogs/Info/InfoDialog';


type Props = DispatchProps;

const UserFormModal: React.FC<Props> = props => {
  const {
    visibleModalUser,
    toggleModalUser,
    actionUserLoading,
    actionUserSuccess,
    actionUserErr,
    actionUserMsg,
    actionUserRequest,
    actionUserReset,
    user,
    resetEdituser,
  } = props;

  const navigateGoBack = useCallback(() => {
    if (user) {
      resetEdituser();
    }
    actionUserReset();
    toggleModalUser();
  }, [actionUserReset, toggleModalUser]);

  const addUserHandler = (student: CreateUser) => {
    console.log(student);
    actionUserRequest(student);
  };

  const closeArrowLeft = () => {
    resetEdituser();
    toggleModalUser();
  };

  useEffect(() => {
    if (actionUserSuccess) {
      navigateGoBack();
    }
  }, [actionUserSuccess, navigateGoBack]);

  return (
    <Modal
      visible={visibleModalUser}
      onRequestClose={closeArrowLeft}
      animationType="slide"
      transparent={false}>
      <Container>
        <Header title={user ? 'Editar Aluno' : 'Adicionar Aluno'}>
          <TouchableOpacity onPress={closeArrowLeft}>
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
              actionUserError={actionUserErr}
              actionUserErrorMsg={actionUserMsg}
              edit={user ? true : false}
              editUsername={user ? user.username : ''}
              editPassword={user ? '*******' : ''}
              editName={user ? user.info?.name : ''}
            />
          </Forms>
        </Content>
        {actionUserLoading && <LoadingDialog title={user ? 'Editar Usuário' : 'Adicionando Usuário'} />}
        {actionUserErr ? (
        <InfoDialog
          title="Error"
          text={
            actionUserMsg
          }
          action={() =>
            closeArrowLeft()
          }
        />
      ) : null}
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

export default UserFormModal;
