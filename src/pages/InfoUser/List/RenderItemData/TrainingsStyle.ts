import styled from 'styled-components/native';

interface Props {
  size: number;
  weight: string;
  color: string;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const InfoContent = styled.View`
  flex: 1;
  margin-left: 10;
  justify-content: center;
`;

export const ExercisesNumbers = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${(props: Props) => props.size};
  font-weight: ${(props: Props) => props.weight};
  color: ${(props: Props) => props.color};
`;
