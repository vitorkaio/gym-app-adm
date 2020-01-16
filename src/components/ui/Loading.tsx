import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import Colors from 'components/styles/Colors';

interface Props extends ActivityIndicatorProps {
  size: 'small' | 'large';
}

const Loading: React.FC<Props> = ({size}) => {
  return <ActivityIndicator size={size} color={Colors.text_color} />;
};

export default Loading;
