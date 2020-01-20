import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {DispatchProps} from './ListTypes';
// import {Training} from 'models/User';
import RenderItemData from './RenderItemData/RenderItemData';
import {SwipeListView} from 'react-native-swipe-list-view';
import Colors from 'components/styles/Colors';
import {Exercise} from 'models/User';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ContainerHidden, ItemHidden} from './ListStyle';
import ConfirmDialog from 'components/Dialogs/Confirm/ConfirmDialog';

const List: React.FC<DispatchProps> = props => {
  const {data} = props;
  const [toggleConfim, setToggleConfim] = useState(false);
  const [exercise, setExercise] = useState<Exercise>();

  const deleteExerciseConfirm = (exercise: Exercise) => {
    // removeTrainingUserHandler(id);
    setExercise(exercise);
    setToggleConfim(true);
  };

  const deleteExerciseUserHandler = (action: boolean) => {
    if (action) {
      // removeTrainingUserHandler(training?._id);
      setToggleConfim(false);
    } else {
      setToggleConfim(false);
    }
  };

  const editExerciseHandler = (exercise: Exercise) => {
    console.log(exercise);
  };

  return (
    <>
      <SwipeListView
        useFlatList
        data={data}
        keyExtractor={(item: Exercise, _) => item._id}
        renderItem={item => <RenderItemData item={item.item} {...props} />}
        renderHiddenItem={item => (
          <ContainerHidden>
            <ItemHidden onPress={() => deleteExerciseConfirm(item.item)}>
              <Icon name="delete" size={22} color={Colors.delete_color} />
            </ItemHidden>
            <ItemHidden
              style={styles.itemHiddenAlign}
              onPress={() => editExerciseHandler(item.item)}>
              <Icon name="pencil" size={22} color={Colors.info_color} />
            </ItemHidden>
          </ContainerHidden>
        )}
        rightOpenValue={-80}
      />
      {toggleConfim && (
        <ConfirmDialog
          title="Deletar"
          text={`Deseja deletar o Exercício ${exercise?.exercise}?`}
          action={deleteExerciseUserHandler}
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
    marginRight: 15,
  },
});

export default List;