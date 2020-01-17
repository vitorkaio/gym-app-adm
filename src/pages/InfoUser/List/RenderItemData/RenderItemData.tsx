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
import {Training} from 'models/User';
import Trainings from './Trainings';
const Trainingicon = require('components/styles/assets/training.png');

interface DispatchProps {
  item: Training;
  select: (training: Training) => void;
}

const RenderItemData: React.FC<DispatchProps> = props => {
  const {item, select} = props;
  const Content = (
    <Container style={styles.container}>
      <Mark>
        <Image source={Trainingicon} style={styles.image} />
      </Mark>
      <CenterComponent>
        <Trainings training={item} />
      </CenterComponent>
      <RightComponent>
        <Icon name="arrow-right" size={25} color={Colors.primary_color} />
      </RightComponent>
    </Container>
  );
  return (
    <TouchableWithoutFeedback onPress={() => select(item)}>
      {Content}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
  },
  container: {
    elevation: 0.8,
  },
});

export default RenderItemData;
