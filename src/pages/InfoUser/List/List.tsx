import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {DispatchProps} from './ListTypes';
// import {Training} from 'models/User';
import RenderItemData from './RenderItemData/RenderItemData';
import {SwipeListView} from 'react-native-swipe-list-view';
import Colors from 'components/styles/Colors';
import {Training} from 'models/User';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ContainerHidden, ItemHidden} from './ListStyle';
import ConfirmDialog from 'components/Dialogs/Confirm/ConfirmDialog';

const List: React.FC<DispatchProps> = props => {
  const {data, removeTrainingUserHandler, editTrainingHandler} = props;
  const [toggleConfim, setToggleConfim] = useState(false);
  const [toggleEditConfim, setToggleEditConfim] = useState(false);
  const [training, setTraining] = useState<Training>();

  const deleteTrainingConfirm = (training: Training) => {
    // removeTrainingUserHandler(id);
    setTraining(training);
    setToggleConfim(true);
  };

  const deleteTrainingUserHandler = (action: boolean) => {
    if (action) {
      removeTrainingUserHandler(training?._id ? training._id : '');
      setToggleConfim(false);
    } else {
      setToggleConfim(false);
    }
  };

  const editTrainingConfirm = (training: Training) => {
    // removeTrainingUserHandler(id);
    setTraining(training);
    setToggleEditConfim(true);
  };

  const editTrainingUserHandler = (action: boolean) => {
    if (action) {
      const newTraining: Training = training!;
      editTrainingHandler(newTraining);
      setToggleEditConfim(false);
    } else {
      setToggleEditConfim(false);
    }
  };

  return (
    <>
      <SwipeListView
        useFlatList
        data={data}
        keyExtractor={(item: Training, _) => item._id}
        renderItem={item => <RenderItemData item={item.item} {...props} />}
        renderHiddenItem={item => (
          <ContainerHidden>
            <ItemHidden onPress={() => deleteTrainingConfirm(item.item)}>
              <Icon name="delete" size={22} color={Colors.delete_color} />
            </ItemHidden>
            <ItemHidden
              style={styles.itemHiddenAlign}
              onPress={() => editTrainingConfirm(item.item)}>
              <Icon name="pencil" size={22} color={Colors.info_color} />
            </ItemHidden>
          </ContainerHidden>
        )}
        leftOpenValue={80}
      />
      {toggleConfim && (
        <ConfirmDialog
          title="Deletar"
          text={`Deseja deletar o treino ${training?.name}?`}
          action={deleteTrainingUserHandler}
        />
      )}
      {toggleEditConfim && (
        <ConfirmDialog
          title="Editar"
          text={`Deseja editar o treino ${training?.name}?`}
          action={editTrainingUserHandler}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
  itemHiddenAlign: {
    marginLeft: 15,
  },
});

export default List;
