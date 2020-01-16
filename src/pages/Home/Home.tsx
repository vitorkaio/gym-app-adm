import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ApplicationState} from 'store/store';
import * as GymActions from 'store/modules/gym/actions';
import {DispatchProps, StateProps} from './HomeTypes';
import {Container, Content, Text} from './HomeStyle';
import Header from 'components/Header/Header';
import Colors from 'components/styles/Colors';
import List from './List/List';
import User from 'models/User';
import Add from 'components/Add/Add';
import AddUserModal from './AddUserModal/AddUserModal';
import {CreateUser} from 'models/TypesAux';

type Props = StateProps & DispatchProps;

const Home: React.FC<Props> = props => {
  const {usersRequest, gymReducer, createUserRequest, createUserReset} = props;
  const [visibleModalUser, setVisibleModalUser] = useState(false);

  useEffect(() => {
    usersRequest();
  }, [usersRequest]);

  const addUserNavigate = () => {
    toggleVisibleModalUser();
  };

  const infoUserNavigate = (user: User) => {
    console.log(user);
  };

  const toggleVisibleModalUser = () => {
    setVisibleModalUser(!visibleModalUser);
  };

  const createUserHandler = (newUser: CreateUser) => {
    createUserRequest(newUser);
  };

  const {
    users,
    users_loading,
    create_user_loading,
    create_user_msg,
    create_user_error,
  } = gymReducer;

  return (
    <Container>
      <Header title="Alunos">
        <Icon name="menu" size={25} color={Colors.primary_color} />
        <Icon name="magnify" size={25} color={Colors.primary_color} />
      </Header>
      <Content>
        {users_loading ? (
          <Text>Carregando...</Text>
        ) : (
          <List data={users} select={infoUserNavigate} />
        )}
      </Content>
      <Add onPressHandler={addUserNavigate} />
      {visibleModalUser ? (
        <AddUserModal
          visibleModalUser={visibleModalUser}
          toggleModalUser={toggleVisibleModalUser}
          createUserRequest={createUserHandler}
          createUserReset={createUserReset}
          createUserLoading={create_user_loading}
          createUserMsg={create_user_msg}
          createUserErr={create_user_error}
        />
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  gymReducer: state.gymReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GymActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
