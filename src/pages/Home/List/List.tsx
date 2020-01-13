import React from 'react';
import {FlatList} from 'react-native';

import {DispatchProps} from './ListTypes';
import User from 'models/User';
import RenderItemData from './RenderItemData/RenderItemData';

// import { Container } from './ListStyle';

const List: React.FC<DispatchProps> = props => {
  const {data} = props;
  return (
    <FlatList
      keyExtractor={(item: User, _) => item._id}
      data={data}
      renderItem={item => <RenderItemData item={item.item} {...props} />}
      {...props}
    />
  );
};

export default List;
