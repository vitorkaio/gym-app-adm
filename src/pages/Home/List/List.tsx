import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {DispatchProps} from './ListTypes';
import User from 'models/User';
import RenderItemData from './RenderItemData/RenderItemData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ContainerHidden, ItemHidden} from './ListStyle';
import ConfirmDialog from 'components/Dialogs/Confirm/ConfirmDialog';
import {SwipeListView} from 'react-native-swipe-list-view';
import Colors from 'components/styles/Colors';

// import { Container } from './ListStyle';

const List: React.FC<DispatchProps> = props => {
  const {data, removeUserHandler} = props;
  const [toggleConfim, setToggleConfim] = useState(false);
  const [user, setUser] = useState<User>();

  const deleteUserConfirm = (user: User) => {
    // removeTrainingUserHandler(id);
    setUser(user);
    setToggleConfim(true);
  };

  const deleteUserHandler = (action: boolean) => {
    if (action) {
      removeUserHandler(user?._id);
      setToggleConfim(false);
    } else {
      setToggleConfim(false);
    }
  };

  const editUserHandler = (user: User) => {
    console.log(user);
  };

  return (
    <>
      <SwipeListView
        useFlatList
        data={data}
        keyExtractor={(item: User, _) => item._id}
        renderItem={item => <RenderItemData item={item.item} {...props} />}
        renderHiddenItem={item => (
          <ContainerHidden>
            <ItemHidden onPress={() => deleteUserConfirm(item.item)}>
              <Icon name="delete" size={22} color={Colors.delete_color} />
            </ItemHidden>
            <ItemHidden
              style={styles.itemHiddenAlign}
              onPress={() => editUserHandler(item.item)}>
              <Icon name="pencil" size={22} color={Colors.info_color} />
            </ItemHidden>
          </ContainerHidden>
        )}
        leftOpenValue={80}
      />
      {toggleConfim && (
        <ConfirmDialog
          title="Deletar"
          text={`Deseja deletar o usuário ${user?.username}?`}
          action={deleteUserHandler}
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
