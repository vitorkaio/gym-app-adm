import React, {useEffect} from 'react';
import GymApi from 'services/GymApi';
import User from 'models/User';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// <Icon name="home-heart" size={24} />

import {Container, Text} from './HomeStyle';

const Home: React.FC = () => {
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users: User[] = await GymApi.getUsers();
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
