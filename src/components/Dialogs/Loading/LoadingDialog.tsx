import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, Content, Title} from './LoadingStyle';
import BackDrop from 'components/ui/BackDrop/BackDrop';
import Loading from 'components/ui/Loading';
import {DispatchProps} from './LoadingTypes';

type Props = DispatchProps;

const LoadingDialog: React.FC<Props> = ({title}) => {
  return (
    <Container style={LoadingStyle.container}>
      <BackDrop action={() => {}} />
      <Content style={LoadingStyle.content}>
        <Loading size="large" />
        <Title>{title}</Title>
      </Content>
    </Container>
  );
};

const LoadingStyle = StyleSheet.create({
  container: {
    elevation: 9,
    width: '100%',
    height: '100%',
  },
  content: {
    elevation: 29,
  },
});

export default LoadingDialog;
