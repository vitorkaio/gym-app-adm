import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.content_color};
`;

export const Text = styled.Text`
  font-size: 22px;
  color: ${Colors.primary_color};
  margin-top: 10px;
`;

export const Image = styled.Image``;
