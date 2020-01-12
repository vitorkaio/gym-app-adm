import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from 'pages/Home/Home';

const AdminNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AdminNavigator);
