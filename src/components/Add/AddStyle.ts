import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.TouchableOpacity`
  width: 53;
  height: 53;
  border-width: 1;
  border-radius: 53;
  border-color: ${Colors.primary_color};
  background-color: ${Colors.primary_color};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 25;
  bottom: 25;
`;
