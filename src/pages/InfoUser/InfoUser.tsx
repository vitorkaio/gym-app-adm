import React, {useState, useCallback} from 'react';
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
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
import List from './List/List';
import User, {Training} from 'models/User';
import Add from 'components/Add/Add';
import TrainingFormModal from './TrainingFormModal/TrainingFormModal';

type Props = DispatchProps & StateProps;

const InfoUser: React.FC<Props> = props => {
  const {
    navigation,
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
  const [visibleModalAddTraining, setVisibleModalAddTraining] = useState(false);

  const navigateGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const infoTrainingNavigate = (training: Training) => {
    console.log(training);
    shareDatas.idTraining = training._id;
    navigation.navigate('InfoTraining');
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
        {null}
      </Header>
      <Content>
        <List data={trainings ? trainings : []} select={infoTrainingNavigate} removeTrainingUserHandler={removeTrainingUserHandler} />
        {removeTrainingUserLoadingData && <LoadingDialog title="Removendo Treino" />}
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
