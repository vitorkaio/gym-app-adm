import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.TouchableOpacity`
  margin-top: 12;
  margin-bottom: 5;
  margin-left: 5;
  margin-right: 5;
  padding-left: 10;
  padding-right: 15;
  height: 60;
  flex-direction: row;
  border-radius: 1;
`;

export const Mark = styled.View`
  justify-content: center;
  align-items: center;
`;

export const MarkInside = styled.View`
  background-color: ${Colors.primary_color};
  width: 3;
  height: 40;
`;

export const CenterComponent = styled.View`
  flex: 1;
  padding-left: 5;
`;

export const RightComponent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 34;
  height: 34;
`;
