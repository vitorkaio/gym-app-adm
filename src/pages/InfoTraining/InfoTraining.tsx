import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {ApplicationState} from 'store/store';
import * as GymActions from 'store/modules/gym/actions';

import {Container, Content, TouchableOpacity, Text} from './InfoTrainingStyle';
import Header from 'components/Header/Header';
import Colors from 'components/styles/Colors';
import ShareDatas from 'services/ShareDatas';
import {DispatchProps, StateProps} from './InfoTrainingTypes';
import { Training, Exercise } from 'models/User';
import List from './List/List';
import Add from 'components/Add/Add';
import ExerciseFormModal from './ExerciseFormModal/ExerciseFormModal';
import { AddExercise } from 'models/TypesAux';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';


type Props = DispatchProps & StateProps;

const InfoTraining: React.FC<Props> = props => {
  const [visibleAddExerciseModal, setVisibleAddExerciseModal] = useState(false);
  const {
    navigation, 
    users, 
    addExerciseTrainingLoadingData, 
    addExerciseTrainingSuccessData, 
    addExerciseTrainingErrorData, 
    addExerciseTrainingErrorMsgData,
    addExerciseTrainingRequest,
    addExerciseTrainingReset,
    removeExerciseTrainingLoadingData,
    removeExerciseTrainingRequest,
  } = props;
  
  const navigateGoBack = () => {
    navigation.goBack();
  };

  const removeExerciseTrainingUserHandler = (idExercise: string) => {
    removeExerciseTrainingRequest(training!._id, idExercise);
  }

  const toggleVisibleModalExercise = () => {
    setVisibleAddExerciseModal(!visibleAddExerciseModal);
  };

  const addExerciseTrainingHandler = (exercise: AddExercise) => {
    addExerciseTrainingRequest(training!._id, exercise);
  }

  const shareDatas = ShareDatas.getInstance();
  const training: Training | undefined = shareDatas.getTraining([...users]);
  const exercises: Exercise[] = training!.exercises;
  return (
    <Container>
      <Header title={training?.name ? training.name : ''}>
        <TouchableOpacity onPress={navigateGoBack}>
          <Icon name="arrow-left" size={25} color={Colors.primary_color} />
        </TouchableOpacity>
        {null}
      </Header>
      <Content>
        <List data={exercises} removeExerciseTrainingUserHandler={removeExerciseTrainingUserHandler} />
        {removeExerciseTrainingLoadingData && <LoadingDialog title="Removendo Exercício" />}
      </Content>
      <Add onPressHandler={toggleVisibleModalExercise} />
      <ExerciseFormModal 
        addExerciseTrainingLoading={addExerciseTrainingLoadingData} 
        addExerciseTrainingSuccess={addExerciseTrainingSuccessData} 
        addExerciseTrainingErr={addExerciseTrainingErrorData}
        addExerciseTrainingErrMsg={addExerciseTrainingErrorMsgData}
        addExerciseTrainingRequest={addExerciseTrainingHandler}
        addExerciseTrainingReset={addExerciseTrainingReset}
        visibleModalAddExercise={visibleAddExerciseModal}
        toggleModalAddExercise={toggleVisibleModalExercise}
      />
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  users: state.gymReducer.users,
  addExerciseTrainingLoadingData: state.gymReducer.add_exercise_training_loading,
  addExerciseTrainingSuccessData: state.gymReducer.add_exercise_training_success,
  addExerciseTrainingErrorData: state.gymReducer.add_exercise_training_error,
  addExerciseTrainingErrorMsgData: state.gymReducer.add_exercise_training_error_msg,

  removeExerciseTrainingLoadingData: state.gymReducer.remove_exercise_training_loading,
  removeExerciseTrainingSuccessData: state.gymReducer.remove_exercise_training_success,
  removeExerciseTrainingErrorData: state.gymReducer.remove_exercise_training_error,
  removeExerciseTrainingErrorMsgData: state.gymReducer.remove_exercise_training_error_msg,

});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GymActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoTraining);
