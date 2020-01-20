import React from 'react';

import {Container, Text} from './FooterButtonStyle';
import {DispatchProps} from './FooterButtonType';

type Props = DispatchProps;

const FooterButton: React.FC<Props> = props => {
  const {clickHandler, text} = props;
  return (
    <Container onPress={clickHandler}>
      <Text>{text}</Text>
    </Container>
  );
};

export default FooterButton;
