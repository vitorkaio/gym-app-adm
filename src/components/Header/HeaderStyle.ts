import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.View`
  width: 100%;
  height: 56;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${Colors.content_color};
`;

export const CenterTitle = styled.View`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftIcon = styled.View`
  flex: 1;
  margin-left: 15;
`;

export const RightIcons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15;
`;

export const Title = styled.Text`
  font-size: 22;
  font-weight: bold;
  color: ${Colors.primary_color};
`;
