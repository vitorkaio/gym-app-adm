import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

interface Props {
  color: string;
}

export const Container = styled.View`
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  position: relative;
  top: -50;
  width: 300;
  height: 150;
  background-color: ${Colors.content_color};
`;

export const TitleContainer = styled.View`
  flex: 2;
  padding-left: 10;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${Colors.text_color};
`;

export const TextContainer = styled.View`
  flex: 3;
  padding-top: 2;
  padding-left: 10;
`;

export const TextContent = styled.Text`
  font-size: 14;
  color: ${Colors.text_color};
`;

export const ActionsContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15;
`;

export const ButtonActionContainer = styled.TouchableOpacity`
  margin-left: 20;
  margin-right: 10;
`;

export const ButtonText = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${(props: Props) => props.color};
`;
