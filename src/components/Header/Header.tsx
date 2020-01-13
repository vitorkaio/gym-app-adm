import React from 'react';

import {
  Container,
  LeftIcon,
  CenterTitle,
  RightIcons,
  Title,
} from './HeaderStyle';

import {DispatchProps} from './HeaderTypes';

type Props = DispatchProps;

const Header: React.FC<Props> = props => {
  const {title, children} = props;
  return (
    <Container>
      <LeftIcon>{children[0]}</LeftIcon>
      <CenterTitle>
        <Title>{title}</Title>
      </CenterTitle>
      <RightIcons>
        {children.map((item, index) => {
          return index === 0 ? null : item;
        })}
      </RightIcons>
    </Container>
  );
};

export default Header;
