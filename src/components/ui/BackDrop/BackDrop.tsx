import React from 'react';
import {StyleSheet} from 'react-native';

import {Container} from './BackDropStyle';
import {DispatchProps} from './BackDropType';

type Props = DispatchProps;

const BackDrop: React.FC<Props> = ({action}) => {
  return <Container style={BackDropStyle.container} onPress={action} />;
};

const BackDropStyle = StyleSheet.create({
  container: {
    elevation: 19,
    width: '100%',
    height: '100%',
  },
});

export default BackDrop;
