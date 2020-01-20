import React, {useEffect, useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ApplicationState} from 'store/store';
import * as GymActions from 'store/modules/gym/actions';

import {Container, Content, TouchableOpacity} from './InfoUserStyle';
import ShareDatas from 'services/ShareDatas';
import Header from 'components/Header/Header';
import Colors from 'components/styles/Colors';
import {DispatchProps, StateProps} from './InfoUserTypes';
import ConfirmDialog from 'components/Dialogs/Confirm/ConfirmDialog';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
import List from './List/List';
import User, {Training} from 'models/User';
import Add from 'components/Add/Add';
import TrainingFormModal from './TrainingFormModal/TrainingFormModal';

type Props = DispatchProps & StateProps;

const InfoUser: React.FC<Props> = props => {
  const {
    navigation,
    removeUserRequest,
    removeUserLoadingData,
    removeUserSuccessData,
    removeUserReset,
    addTrainingUserLoadingData,
    addTrainingUserSuccessData,
    addTrainingUserErrorData,
    addTrainingUserErrorMsgData,
    updateAddTrainingUserRequest,
    updateAddTrainingUserReset,
    removeTrainingUserRequest,
    removeTrainingUserReset,
    removeTrainingUserSuccessgData,
    removeTrainingUserLoadingData,
    users,
  } = props;
  const [toggleConfim, setToggleConfirm] = useState(false);
  const [visibleModalAddTraining, setVisibleModalAddTraining] = useState(false);

  const navigateGoBack = useCallback(() => {
    removeUserReset();
    navigation.goBack();
  }, [navigation, removeUserReset]);

  const removeUserHandler = (action: boolean) => {
    if (action) {
      removeUserRequest(id ? id : '');
      setToggleConfirm(false);
    } else {
      setToggleConfirm(false);
    }
  };

  const infoTrainingNavigate = (training: Training) => {
    console.log(training);
  };

  const addTrainingNavigate = () => {
    toggleVisibleModalAddTraining();
  };

  const toggleVisibleModalAddTraining = () => {
    setVisibleModalAddTraining(!visibleModalAddTraining);
  };

  const addTrainingUserHandler = (name: string) => {
    updateAddTrainingUserRequest(id ? id : '', name);
  };

  const removeTrainingUserHandler = (idTraining: string) => {
    removeTrainingUserRequest(id ? id : '', idTraining);
  }

  useEffect(() => {
    if (removeUserSuccessData) {
      navigateGoBack();
    }
  }, [navigateGoBack, removeUserSuccessData]);

  const shareDatas = ShareDatas.getInstance();
  const user: User | undefined = shareDatas.getUser([...users]);
  const username = user?.username;
  const id = user?._id;
  const trainings = user?.trainings;
  console.log(users);
  return (
    <Container>
      <Header title={username ? username : ''}>
        <TouchableOpacity onPress={navigateGoBack}>
          <Icon name="arrow-left" size={25} color={Colors.primary_color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setToggleConfirm(true)}>
          <Icon name="delete" size={20} color={Colors.delete_color} />
        </TouchableOpacity>
        {null}
      </Header>
      <Content>
        <List data={trainings ? trainings : []} select={infoTrainingNavigate} removeTrainingUserHandler={removeTrainingUserHandler} />
        {removeTrainingUserLoadingData && <LoadingDialog title="Removendo Treino" />}
        {toggleConfim && (
          <ConfirmDialog
            title="Deletar"
            text={`Deseja deletar o usuário ${username}?`}
            action={removeUserHandler}
          />
        )}
        {removeUserLoadingData && <LoadingDialog title="Deletando Usuário" />}
      </Content>
      <Add onPressHandler={addTrainingNavigate} />
      {visibleModalAddTraining && (
        <TrainingFormModal
          visibleModalAddTraining={visibleModalAddTraining}
          toggleModalAddTraining={toggleVisibleModalAddTraining}
          addTrainingUserLoading={addTrainingUserLoadingData}
          addTrainingUserSuccess={addTrainingUserSuccessData}
          addTrainingUserErr={addTrainingUserErrorData}
          addTrainingUserErrMsg={addTrainingUserErrorMsgData}
          addTrainingUserRequest={addTrainingUserHandler}
          addTrainingUserReset={updateAddTrainingUserReset}
        />
      )}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  users: state.gymReducer.users,
  removeUserSuccessData: state.gymReducer.remove_user_success,
  removeUserLoadingData: state.gymReducer.remove_user_loading,
  removeUserErrorData: state.gymReducer.remove_user_error,
  removeUserErrorMsgData: state.gymReducer.remove_user_error_msg,
  addTrainingUserLoadingData: state.gymReducer.update_add_training_user_loading,
  addTrainingUserSuccessData: state.gymReducer.update_add_training_user_success,
  addTrainingUserErrorData: state.gymReducer.update_add_training_user_error,
  addTrainingUserErrorMsgData:
    state.gymReducer.update_add_training_user_error_msg,
  removeTrainingUserLoadingData: state.gymReducer.remove_training_user_loading,
  removeTrainingUserSuccessgData: state.gymReducer.remove_training_user_success,
  removeTrainingUserErrorData: state.gymReducer.remove_training_user_error,
  removeTrainingUserErrorMsgData: state.gymReducer.remove_training_user_error_msg,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GymActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoUser);
