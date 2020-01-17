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

type Props = DispatchProps & StateProps;

const InfoUser: React.FC<Props> = props => {
  const {
    navigation,
    removeUserRequest,
    removeUserLoadingData,
    removeUserSuccessData,
    removeUserReset,
  } = props;
  const [toggleConfim, setToggleConfirm] = useState(false);

  const navigateGoBack = useCallback(() => {
    removeUserReset();
    navigation.goBack();
  }, [navigation, removeUserReset]);

  const removeUserHandler = (action: boolean) => {
    if (action) {
      removeUserRequest(id);
      setToggleConfirm(false);
    } else {
      setToggleConfirm(false);
    }
  };

  useEffect(() => {
    if (removeUserSuccessData) {
      navigateGoBack();
    }
  }, [navigateGoBack, removeUserSuccessData]);

  const shareDatas = ShareDatas.getInstance();
  const username = shareDatas.userSelected.username;
  const id = shareDatas.userSelected._id;
  return (
    <Container>
      <Header title={username}>
        <TouchableOpacity onPress={navigateGoBack}>
          <Icon name="arrow-left" size={25} color={Colors.primary_color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setToggleConfirm(true)}>
          <Icon name="delete" size={20} color={Colors.delete_color} />
        </TouchableOpacity>
        {null}
      </Header>
      <Content>
        {toggleConfim && (
          <ConfirmDialog
            title="Deletar"
            text={`Deseja deletar o usuário ${username}?`}
            action={removeUserHandler}
          />
        )}
        {removeUserLoadingData && <LoadingDialog title="Deletando Usuário" />}
      </Content>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  removeUserSuccessData: state.gymReducer.remove_user_success,
  removeUserLoadingData: state.gymReducer.remove_user_loading,
  removeUserErrorData: state.gymReducer.remove_user_error,
  removeUserErrorMsgData: state.gymReducer.remove_user_error_msg,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GymActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoUser);