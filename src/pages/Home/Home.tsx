import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ApplicationState} from 'store/store';
import * as GymActions from 'store/modules/gym/actions';
import {DispatchProps, StateProps} from './HomeTypes';
import {Container, Content} from './HomeStyle';
import Header from 'components/Header/Header';
import Colors from 'components/styles/Colors';
import List from './List/List';
import User from 'models/User';
import Add from 'components/Add/Add';
import AddUserModal from './AddUserModal/AddUserModal';
import {CreateUser} from 'models/TypesAux';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
import ShareDatas from 'services/ShareDatas';

type Props = StateProps & DispatchProps;

const Home: React.FC<Props> = props => {
  const {
    usersRequest,
    usersData,
    usersLoadingData,
    createUserLoadingData,
    createUserMsgData,
    createUserErrorData,
    createUserRequest,
    createUserReset,
    navigation,
  } = props;
  const [visibleModalUser, setVisibleModalUser] = useState(false);

  useEffect(() => {
    usersRequest();
  }, [usersRequest]);

  const addUserNavigate = () => {
    toggleVisibleModalUser();
  };

  const infoUserNavigate = (user: User) => {
    const shareDatas = ShareDatas.getInstance();
    shareDatas.userSelected = user;
    navigation.navigate('InfoUser');
  };

  const toggleVisibleModalUser = () => {
    setVisibleModalUser(!visibleModalUser);
  };

  const createUserHandler = (newUser: CreateUser) => {
    createUserRequest(newUser);
  };

  console.log('Home - Render');

  return (
    <Container>
      <Header title="Alunos">
        <Icon name="menu" size={25} color={Colors.primary_color} />
        <Icon name="magnify" size={25} color={Colors.primary_color} />
      </Header>
      <Content>
        {usersLoadingData ? (
          <LoadingDialog title="Carregando Usuários" />
        ) : (
          <List data={usersData} select={infoUserNavigate} />
        )}
      </Content>
      <Add onPressHandler={addUserNavigate} />
      {visibleModalUser ? (
        <AddUserModal
          visibleModalUser={visibleModalUser}
          toggleModalUser={toggleVisibleModalUser}
          createUserRequest={createUserHandler}
          createUserReset={createUserReset}
          createUserLoading={createUserLoadingData}
          createUserMsg={createUserMsgData}
          createUserErr={createUserErrorData}
        />
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  usersLoadingData: state.gymReducer.users_loading,
  usersData: state.gymReducer.users,
  usersErrorData: state.gymReducer.users_error,
  createUserLoadingData: state.gymReducer.create_user_loading,
  createUserMsgData: state.gymReducer.create_user_msg,
  createUserErrorData: state.gymReducer.create_user_error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GymActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
