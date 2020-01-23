import React, {useState, useEffect} from 'react';
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
import InfoDialog from 'components/Dialogs/Info/InfoDialog';

type Props = DispatchProps & StateProps;

const InfoTraining: React.FC<Props> = props => {
  const [visibleAddExerciseModal, setVisibleAddExerciseModal] = useState(false);
  const [editExercise, setEditExercise] = useState<Exercise>();
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
    removeExerciseTrainingErrorData,
    removeExerciseTrainingErrorMsgData,
    removeExerciseTrainingReset,
    editExerciseLoadingData,
    editExerciseSuccessData,
    editExerciseErrorData,
    editExerciseErrorMsgData,
    editExerciseRequest,
    editExerciseReset,
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

  const editExerciseHandler = (exercise: Exercise) => {
    setEditExercise(exercise);
    toggleVisibleModalExercise();
  };

  const editExerciseReqHandler = (newExercise: AddExercise) => {
    editExerciseRequest(training!._id, editExercise!._id, newExercise);
  };

  const resetEditExercise = () => {
    if (addExerciseTrainingErrorData) {
      addExerciseTrainingReset();
    }

    if (editExerciseErrorData) {
      editExerciseReset();
    }
    if (editExercise) {
      setEditExercise(undefined);
    }
  }

  useEffect(() => {
    if (editExerciseSuccessData) {
      setEditExercise(undefined);
    }
  }, [editExerciseSuccessData]);

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
        <List 
          data={exercises} 
          removeExerciseTrainingUserHandler={removeExerciseTrainingUserHandler} 
          editExerciseHandler={editExerciseHandler}
        />
        {removeExerciseTrainingLoadingData && <LoadingDialog title="Removendo Exercício" />}
      </Content>
      <Add onPressHandler={toggleVisibleModalExercise} />
      <ExerciseFormModal 
        resetEditExercise={resetEditExercise}
        visibleModalAddExercise={visibleAddExerciseModal}
        toggleModalAddExercise={toggleVisibleModalExercise}
        actionExerciseTrainingLoading={editExercise ? editExerciseLoadingData : addExerciseTrainingLoadingData} 
        actionExerciseTrainingSuccess={editExercise ? editExerciseSuccessData : addExerciseTrainingSuccessData} 
        actionExerciseTrainingErr={editExercise ? editExerciseErrorData : addExerciseTrainingErrorData}
        actionExerciseTrainingErrMsg={editExercise ? editExerciseErrorMsgData : addExerciseTrainingErrorMsgData}
        actionExerciseTrainingRequest={editExercise ? editExerciseReqHandler :  addExerciseTrainingHandler}
        actionExerciseTrainingReset={editExercise ? editExerciseReset : addExerciseTrainingReset}
        exercise={editExercise ? editExercise : null}
      />
      {removeExerciseTrainingErrorData && (
        <InfoDialog
          title="Error"
          text={removeExerciseTrainingErrorMsgData}
          action={() => removeExerciseTrainingReset()}
        />
      )}
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

  editExerciseLoadingData: state.gymReducer.edit_exercise_loading,
  editExerciseSuccessData: state.gymReducer.edit_exercise_success,
  editExerciseErrorData: state.gymReducer.edit_exercise_error,
  editExerciseErrorMsgData: state.gymReducer.edit_exercise_error_msg,

});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GymActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoTraining);
