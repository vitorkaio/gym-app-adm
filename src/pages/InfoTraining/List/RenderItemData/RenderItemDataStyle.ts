import styled from 'styled-components/native';
import Colors from 'components/styles/Colors';

export const Container = styled.View`
  background-color: ${Colors.content_color};
`;

export const ListWrapper = styled.View`
  margin: 10px 10px;
  flex-direction: column;
  border-bottom-width: 0.4px;
  border-color: ${Colors.divider_color};
`;

export const ListTitle = styled.View`
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

export const ListContent = styled.View`
  margin-top: 12px;
  padding: 5px 0 10px 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ItemContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ItemText = styled.Text`
  font-size: 12;
  font-weight: 800;
  color: ${Colors.text_color};
  margin-left: 5px;
`;

export const ListFooter = styled.View`
  padding: 12px 0px 16px 7px;
`;

export const FooterItemText = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: ${Colors.label_color};
`;
