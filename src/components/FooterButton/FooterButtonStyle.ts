import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.TouchableOpacity`
  height: 61;
  background-color: ${Colors.primary_color};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: ${Colors.text_color_dark};
`;
