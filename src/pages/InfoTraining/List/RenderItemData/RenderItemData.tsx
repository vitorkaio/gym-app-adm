import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  Container,
 ListWrapper,
 ListTitle,
 ListContent,
 ListFooter,
 ItemContent,
 ItemText,
 FooterItemText,
 Title
} from './RenderItemDataStyle';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'components/styles/Colors';
import {Exercise} from 'models/User';

interface DispatchProps {
  item: Exercise;
}

const RenderItemData: React.FC<DispatchProps> = props => {
  const {item} = props;
  const Content = (
    <Container style={styles.container}>
      <ListWrapper>
        <ListTitle>
          <Title>
            { item.exercise }
          </Title>
        </ListTitle>
        <ListContent>
          <ItemContent>
            <Icon name="counter" size={18} color={Colors.primary_color} />
            <ItemText>
              { item.number }s de { item.repetitions }
            </ItemText>
          </ItemContent>
          <ItemContent>
            <Icon name="weight" size={18} color={Colors.primary_color} />
            <ItemText>
              { item.weight }
            </ItemText>
          </ItemContent>
          <ItemContent>
            <Icon name="alarm" size={18} color={Colors.primary_color} />
            <ItemText>
              { item.time }
            </ItemText>
          </ItemContent>
        </ListContent>

        <ListFooter>
          <FooterItemText>
            { item.obs }
          </FooterItemText>
        </ListFooter>
      </ListWrapper>
    </Container>
  );
  return (
    <TouchableWithoutFeedback>
      {Content}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
  },
  container: {
    elevation: 0.8,
  },
});

export default RenderItemData;