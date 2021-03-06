import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.View`
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  position: relative;
  width: 250;
  height: 150;
  background-color: white;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.content_color};
`;

export const Title = styled.Text`
  margin-top: 15;
  font-size: 15;
  font-weight: bold;
  color: ${Colors.primary_color};
`;
