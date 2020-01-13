import React from 'react';
import {Text} from './DefaultTextStyle';
import {DispatchProps} from './DefaultTextTypes';

const DefaultText: React.FC<DispatchProps> = props => {
  return <Text {...props}>{props.text}</Text>;
};

export default DefaultText;
