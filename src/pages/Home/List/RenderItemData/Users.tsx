import React from 'react';
import User from 'models/User';

import {Container} from './UsersStyle';
import DefaultText from 'components/DefaultText/DefaultText';

interface Props {
  user: User;
}

const Users: React.FC<Props> = props => {
  const {user} = props;
  const {username, info} = user;
  return (
    <Container>
      <DefaultText text={username} size={16} />
      <DefaultText text={info.name} size={10} />
    </Container>
  );
};

export default Users;
