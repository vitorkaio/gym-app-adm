import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from 'components/styles/Colors';

import {
  Container,
  Content,
  TitleContainer,
  Title,
  TextContainer,
  TextContent,
  ActionsContainer,
  ButtonActionContainer,
  ButtonText,
} from './InfoDialogStyle';
import {DispatchProps} from './InfoDialogTypes';
import BackDrop from 'components/ui/BackDrop/BackDrop';

type Props = DispatchProps;

const ConfirmDialog: React.FC<Props> = ({title, text, action}) => {
  return (
    <Container style={ConfirmStyled.container}>
      <BackDrop action={action} />
      <Content style={ConfirmStyled.content}>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <TextContainer>
          <TextContent>{text}</TextContent>
        </TextContainer>
        <ActionsContainer>
          <ButtonActionContainer onPress={() => action(true)}>
            <ButtonText color={Colors.success_color}>Ok</ButtonText>
          </ButtonActionContainer>
        </ActionsContainer>
      </Content>
    </Container>
  );
};

const ConfirmStyled = StyleSheet.create({
  container: {
    elevation: 9,
    width: '100%',
    height: '100%',
  },
  content: {
    elevation: 29,
  },
});

export default ConfirmDialog;
