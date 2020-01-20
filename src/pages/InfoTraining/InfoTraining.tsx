import React from 'react';
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
import { Training } from 'models/User';
import List from './List/List';

type Props = DispatchProps & StateProps;

const InfoTraining: React.FC<Props> = props => {
  const {navigation, users} = props;
  
  const navigateGoBack = () => {
    navigation.goBack();
  };

  const removeExerciseTrainingUserHandler = (idExercise: string) => {
    console.log(idExercise);
  }

  const shareDatas = ShareDatas.getInstance();
  const training: Training | undefined = shareDatas.getTraining([...users]);
  return (
    <Container>
      <Header title={training?.name ? training.name : ''}>
        <TouchableOpacity onPress={navigateGoBack}>
          <Icon name="arrow-left" size={25} color={Colors.primary_color} />
        </TouchableOpacity>
        {null}
      </Header>
      <Content>
        <List data={training?.exercises ? training.exercises : []} removeExerciseTrainingUserHandler={removeExerciseTrainingUserHandler} />
      </Content>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  users: state.gymReducer.users,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GymActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoTraining);
