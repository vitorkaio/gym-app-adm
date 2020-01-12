import React from 'react';
import { DispatchProps } from './HomeTypes';

type Props = DispatchProps;

const Home: React.FC<Props> = (props) => {

  const { text } = props;

  return (
    <h3>{text}</h3>
  );
}

export default Home
