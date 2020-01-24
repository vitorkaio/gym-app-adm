import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ApplicationState} from 'store/store';
import * as AuthActions from 'store/modules/auth/actions';

import {Container, ImageInput, Forms} from './AuthStyle';
import {DispatchProps, State} from './AuthTypes';
import {AuthLogin} from 'models/TypesAux';
import AuthForms from './AuthForm/AuthForm';
import LoadingDialog from 'components/Dialogs/Loading/LoadingDialog';
// import AuthForms from './AuthForm/AuthForm';
const LoginImage = require('components/styles/assets/login.png');

type Props = DispatchProps & State;

const Auth: React.FC<Props> = props => {
  const {
    navigation,
    authUserData,
    authUserLoadingData,
    authUserErrorData,
    authUserErrorMsgData,
    authUserRequest,
  } = props;

  const login = (authLogin: AuthLogin) => {
    authUserRequest(authLogin);
    // navigation.replace('Home');
  };

  useEffect(() => {
    if (authUserData) {
      navigation.replace('Home');
    }
  }, [authUserData, navigation]);

  return (
    <Container>
      <ImageInput>
        <Image source={LoginImage} style={styles.image} />
      </ImageInput>
      <Forms>
        <AuthForms
          onSubmit={login}
          authUserError={authUserErrorData}
          authUserErrorMsg={authUserErrorMsgData}
        />
      </Forms>
      {authUserLoadingData && <LoadingDialog title="Entrando" />}
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
  authUserLoadingData: state.authReducer.authUser_loading,
  authUserErrorData: state.authReducer.authUser_error,
  authUserErrorMsgData: state.authReducer.authUser_error_msg,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
