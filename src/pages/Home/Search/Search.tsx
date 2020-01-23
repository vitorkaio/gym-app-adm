import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, TextInput, Touch} from './SearchStyle';
import Colors from 'components/styles/Colors';
import {DispatchProps} from './SearchTypes';

type Props = DispatchProps;

const Search: React.FC<Props> = props => {
  const {closeSearch, onSearchUsername} = props;

  const textHandler = (text: string) => {
    onSearchUsername(text);
  };

  return (
    <Container>
      <TextInput onChangeText={textHandler} />
      <Touch onPress={closeSearch}>
        <Icon name="close-circle" size={20} color={Colors.primary_color} />
      </Touch>
    </Container>
  );
};

export default Search;
