import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ApplicationState} from 'store/store';
import * as GymActions from 'store/modules/gym/actions';
import {DispatchProps, StateProps} from './HomeTypes';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// <Icon name="home-heart" size={24} />

import {Container, Text} from './HomeStyle';

type Props = StateProps & DispatchProps;

const Home: React.FC<Props> = props => {
  const {usersRequest, gymReducer} = props;

  useEffect(() => {
    usersRequest();
  }, [usersRequest]);

  const {users, users_loading} = gymReducer;

  console.log(users[0]._id);

  return (
    <Container>
      {users_loading ? (
        <Text>Carregando...</Text>
      ) : (
        users.map(user => <Text key={user._id}>{user.username}</Text>)
      )}
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
