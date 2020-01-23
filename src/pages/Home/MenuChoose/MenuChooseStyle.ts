import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${Colors.text_color};
  width: 150px;
`;

export const ItemMenu = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 14px;
`;
