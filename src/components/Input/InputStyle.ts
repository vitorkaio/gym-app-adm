import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

interface Props {
  errorText: boolean;
}

export const Container = styled.View`
  padding-top: 3;
  padding-bottom: 3;
`;

export const Label = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${Colors.primary_color};
  margin-left: 1;
`;

export const TextInput = styled.TextInput`
  margin-top: 5;
  margin-bottom: 5;
  padding-left: 10;
  padding-top: 10;
  padding-bottom: 10;
  border-width: 1;
  border-radius: 5;
  border-color: ${(props: Props) =>
    props.errorText ? Colors.delete_color : Colors.label_color};
  color: ${Colors.text_color};
`;

export const Error = styled.View`
  align-items: center;
`;

export const LabelError = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${Colors.delete_color};
  margin-left: 1;
`;
