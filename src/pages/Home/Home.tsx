import React, {useEffect} from 'react';
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

type Props = StateProps & DispatchProps;

const Home: React.FC<Props> = props => {
  const {usersRequest, gymReducer} = props;

  useEffect(() => {
    usersRequest();
  }, [usersRequest]);

  const {users, users_loading} = gymReducer;

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
          <List data={users} select={(user: User) => console.log(user)} />
        )}
      </Content>
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
