import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

interface Props {
  errorLogin: boolean;
}

export const Container = styled.View``;

export const Forms = styled.View`
  align-items: center;
`;

export const InputDataError = styled.View`
  align-items: center;
`;

export const TextError = styled.Text`
  color: ${Colors.delete_color};
`;

export const InputData = styled.View``;

export const Input = styled.TextInput`
  border-bottom-width: 0.4px;
  border-color: ${(props: Props) =>
    props.errorLogin ? Colors.delete_color : Colors.primary_color};
  padding-bottom: 10px;
  color: ${Colors.primary_color};
`;

export const Text = styled.Text``;
