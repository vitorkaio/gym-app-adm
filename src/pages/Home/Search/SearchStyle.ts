import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56;
  background-color: ${Colors.content_color};
`;

export const TextInput = styled.TextInput`
  width: 200px;
  border-bottom-width: 0.5px;
  border-color: ${Colors.primary_color};
  color: ${Colors.primary_color};
  padding: 5px;
`;

export const Touch = styled.TouchableOpacity`
  margin-left: 20px;
`;
