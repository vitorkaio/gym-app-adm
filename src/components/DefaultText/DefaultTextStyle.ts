import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

interface Props {
  size?: number;
  color?: string;
  weight?: number;
}

export const Text = styled.Text`
  font-size: ${(props: Props) => (props.size ? props.size : 10)};
  color: ${(props: Props) => (props.color ? props.color : Colors.text_color)};
  font-weight: ${(props: Props) => (props.weight ? props.weight : 400)};
`;
