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
import UserFormModal from './UserFormModal/UserFormModal';
import {CreateUser} from 'models/TypesAux';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
import InfoDialog from 'components/Dialogs/Info/InfoDialog';
import ShareDatas from 'services/ShareDatas';

type Props = StateProps & DispatchProps;

const Home: React.FC<Props> = props => {
  const {
    usersRequest,
    usersData,
    usersLoadingData,
    usersErrorData,
    usersErrorMsgData,
    createUserLoadingData,
    createUserErrorData,
    createUserSuccessData,
    createUserErrorMsgData,
    createUserRequest,
    createUserReset,
    navigation,
    removeUserLoadingData,
    removeUserRequest,
    removeUserReset,
    removeUserSuccessDatas,
    editUserLoadingData,
    editUserSuccessData,
    editUserErrorData,
    removeUserErrorData,
    removeUserErrorMsgData,
    editUserRequest,
    editUserErrorMsgData,
    editUserReset,
  } = props;
  const [visibleModalUser, setVisibleModalUser] = useState(false);
  const [editUser, setEditUser] = useState<User>();

  const addUserNavigate = () => {
    toggleVisibleModalUser();
  };

  const infoUserNavigate = (user: User) => {
    const shareDatas = ShareDatas.getInstance();
    shareDatas.id = user._id;
    navigation.navigate('InfoUser');
  };

  const toggleVisibleModalUser = () => {
    setVisibleModalUser(!visibleModalUser);
  };

  const createUserHandler = (newUser: CreateUser) => {
    createUserRequest(newUser);
  };

  const removeUserHandler = (id: string) => {
    removeUserRequest(id);
  };

  const editUserHandler = (user: User) => {
    setEditUser(user);
    toggleVisibleModalUser();
  };

  const editUserReqHandler = (newUser: CreateUser) => {
    editUserRequest(editUser!._id, newUser);
  };

  const resetEdituser = () => {
    if (createUserErrorData) {
      createUserReset();
    }
    if (editUserErrorData) {
      editUserReset();
    }
    if (editUser) {
      setEditUser(undefined);
    }
  };

  useEffect(() => {
    usersRequest();
  }, [usersRequest]);

  useEffect(() => {
    if (removeUserSuccessDatas) {
      removeUserReset();
    }
  }, [removeUserSuccessDatas, removeUserReset]);

  useEffect(() => {
    if (editUserSuccessData) {
      setEditUser(undefined);
    }
  }, [editUserSuccessData]);

  // console.log('Home - Render');

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
          <List
            data={usersData}
            select={infoUserNavigate}
            removeUserHandler={removeUserHandler}
            editUserHandler={editUserHandler}
          />
        )}
        {removeUserLoadingData && <LoadingDialog title="Deletando Usuário" />}
      </Content>
      <Add onPressHandler={addUserNavigate} />
      {visibleModalUser ? (
        <UserFormModal
          resetEdituser={resetEdituser}
          visibleModalUser={visibleModalUser}
          toggleModalUser={toggleVisibleModalUser}
          actionUserRequest={editUser ? editUserReqHandler : createUserHandler}
          actionUserReset={editUser ? editUserReset : createUserReset}
          actionUserSuccess={
            editUser ? editUserSuccessData : createUserSuccessData
          }
          actionUserLoading={
            editUser ? editUserLoadingData : createUserLoadingData
          }
          actionUserMsg={
            editUser ? editUserErrorMsgData : createUserErrorMsgData
          }
          actionUserErr={editUser ? editUserErrorData : createUserErrorData}
          edit={editUser ? true : false}
          user={editUser ? editUser : null}
        />
      ) : null}
      {usersErrorData && (
        <InfoDialog
          title="Error"
          text={usersErrorMsgData}
          action={() => usersRequest()}
        />
      )}
      {removeUserErrorData && (
        <InfoDialog
          title="Error"
          text={removeUserErrorMsgData}
          action={() => removeUserReset()}
        />
      )}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  usersLoadingData: state.gymReducer.users_loading,
  usersData: state.gymReducer.users,
  usersErrorData: state.gymReducer.users_error,
  usersErrorMsgData: state.gymReducer.users_error_msg,

  createUserLoadingData: state.gymReducer.create_user_loading,
  createUserSuccessData: state.gymReducer.create_user_success,
  createUserErrorData: state.gymReducer.create_user_error,
  createUserErrorMsgData: state.gymReducer.create_user_error_msg,

  removeUserSuccessData: state.gymReducer.remove_user_success,
  removeUserLoadingData: state.gymReducer.remove_user_loading,
  removeUserErrorData: state.gymReducer.remove_user_error,
  removeUserErrorMsgData: state.gymReducer.remove_user_error_msg,

  editUserLoadingData: state.gymReducer.edit_user_loading,
  editUserSuccessData: state.gymReducer.edit_user_success,
  editUserErrorData: state.gymReducer.edit_user_error,
  editUserErrorMsgData: state.gymReducer.edit_user_error_msg,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GymActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
