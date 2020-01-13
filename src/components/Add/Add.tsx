import React from 'react';

import {Container} from './AddStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from 'components/styles/Colors';
import {DispatchProps} from './AddTypes';

const Add: React.FC<DispatchProps> = props => {
  const {onPressHandler} = props;
  return (
    <Container onPress={onPressHandler}>
      <Icon name="plus" size={20} color={Colors.content_color} />
    </Container>
  );
};

export default Add;
