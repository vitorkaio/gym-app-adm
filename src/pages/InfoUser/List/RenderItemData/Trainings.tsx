import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, InfoContent, ExercisesNumbers, Text} from './TrainingsStyle';
import Colors from 'components/styles/Colors';
import {Training} from 'models/User';

interface Props {
  training: Training;
}

const TrainingsList: React.FC<Props> = ({training}) => {
  return (
    <Container>
      <InfoContent>
        <Text size={14} color={Colors.text_color} weight="500">
          {training.name}
        </Text>
        <ExercisesNumbers>
          <Text size={12} color={Colors.primary_color} weight="bold">
            {training.exercises.length}
          </Text>
          <Text
            style={TrainingListStyle.exerciseNumberText}
            size={12}
            color={Colors.label_color}
            weight="500">
            exercícios
          </Text>
        </ExercisesNumbers>
      </InfoContent>
    </Container>
  );
};

const TrainingListStyle = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
  },
  exerciseNumberText: {
    marginLeft: 5,
  },
});

export default TrainingsList;
