import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  Container,
  Mark,
  CenterComponent,
  RightComponent,
  Image,
} from './RenderItemDataStyle';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from 'components/styles/Colors';
import User from 'models/User';
import Users from './Users';
const Usericon = require('components/styles/assets/user.png');

interface DispatchProps {
  item: User;
  select: (user: User) => void;
}

const RenderItemData: React.FC<DispatchProps> = props => {
  const {item, select} = props;
  const Content = (
    <Container style={styles.container}>
      <Mark>
        <Image source={Usericon} />
      </Mark>
      <CenterComponent>
        <Users user={item} />
      </CenterComponent>
      <RightComponent>
        <Icon name="arrow-right" size={20} color={Colors.primary_color} />
      </RightComponent>
    </Container>
  );
  return (
    <TouchableWithoutFeedback
      onPress={() => select(item)}
      style={styles.container}>
      {Content}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 0.8,
  },
});

export default RenderItemData;
