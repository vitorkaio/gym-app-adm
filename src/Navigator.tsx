import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from 'pages/Home/Home';
import InfoUserScreen from 'pages/InfoUser/InfoUser';
import InfoTrainingScreen from 'pages/InfoTraining/InfoTraining';
import AuthScreen from 'pages/Auth/Auth';
import SplashScreen from 'pages/Splash/Splash';

const AdminNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Auth: {
      screen: AuthScreen,
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
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AdminNavigator);
