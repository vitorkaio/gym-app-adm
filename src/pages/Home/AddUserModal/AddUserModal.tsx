import React from 'react';

import {Modal, Container, TouchableOpacity} from './AddUserModalStyle';
import DefaultText from 'components/DefaultText/DefaultText';
import {DispatchProps} from './AddUserModalTypes';
import Header from 'components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'components/styles/Colors';

type Props = DispatchProps;

const AddUserModal: React.FC<Props> = props => {
  const {visibleModalUser, toggleModalUser} = props;
  console.log(visibleModalUser);
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
        <DefaultText text="Add User" />
      </Container>
    </Modal>
  );
};

export default AddUserModal;
