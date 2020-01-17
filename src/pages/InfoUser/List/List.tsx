import React from 'react';
// import {FlatList} from 'react-native';

import {DispatchProps} from './ListTypes';
// import {Training} from 'models/User';
import RenderItemData from './RenderItemData/RenderItemData';
import {SwipeListView} from 'react-native-swipe-list-view';
import {View, Text, StyleSheet} from 'react-native';
import {Training} from 'models/User';

// import { Container } from './ListStyle';

const List: React.FC<DispatchProps> = props => {
  const {data} = props;
  return (
    <SwipeListView
      useFlatList
      data={data}
      keyExtractor={(item: Training, _) => item._id}
      renderItem={item => <RenderItemData item={item.item} {...props} />}
      renderHiddenItem={() => (
        <View style={styles.rowBack}>
          <Text>Right</Text>
        </View>
      )}
      rightOpenValue={-150}
    />
  );
};

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    paddingLeft: 15,
    flex: 1,
    marginTop: 12,
  },
});

export default List;
