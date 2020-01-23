import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, Text, Content, ItemMenu} from './MenuChooseStyle';
import BackDrop from 'components/ui/BackDrop/BackDrop';
import {DispatchProps, State} from './MenuChooseTypes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'components/styles/Colors';

type Props = DispatchProps & State;

const MenuChoose: React.FC<Props> = props => {
  const {toggleMenuHandler, search, exit} = props;
  const goBack = () => {
    toggleMenuHandler();
  };
  return (
    <Container style={styles.container}>
      <BackDrop action={() => goBack()} />
      <Content style={styles.content}>
        <ItemMenu onPress={search}>
          <Icon name="magnify" size={16} color={Colors.content_color} />
          <Text style={styles.text}>Pesquisar</Text>
        </ItemMenu>
        <ItemMenu onPress={exit}>
          <Icon name="logout" size={16} color={Colors.content_color} />
          <Text style={styles.text}>Sair</Text>
        </ItemMenu>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 9,
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    elevation: 29,
    right: 5,
    top: 10,
  },
  text: {
    marginLeft: 10,
  },
});

export default MenuChoose;
