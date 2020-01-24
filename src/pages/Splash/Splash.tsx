import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {ApplicationState} from 'store/store';

import {Container, Text, Image} from './SplashStyle';
import {DispatchProps, StateProps} from './SplashTypes';
const SplashImage = require('components/styles/assets/splash.png');

type Props = DispatchProps & StateProps;

const Splash: React.FC<Props> = props => {
  const {authUserData, navigation} = props;

  useEffect(() => {
    if (authUserData) {
      navigation.replace('Home');
    } else {
      navigation.replace('Auth');
    }
  }, [authUserData, navigation]);

  return (
    <Container>
      <Image source={SplashImage} style={styles.image} />
      <Text>Gym App</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
  },
});

const mapStateToProps = (state: ApplicationState) => ({
  authUserData: state.authReducer.authUser,
});

export default connect(
  mapStateToProps,
  null,
)(Splash);
