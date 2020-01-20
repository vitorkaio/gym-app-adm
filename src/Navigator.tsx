import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from 'pages/Home/Home';
import InfoUserScreen from 'pages/InfoUser/InfoUser';
import InfoTrainingScreen from 'pages/InfoTraining/InfoTraining';

const AdminNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    InfoUser: {
      screen: InfoUserScreen,
    },
    InfoTraining: {
      screen: InfoTrainingScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AdminNavigator);
