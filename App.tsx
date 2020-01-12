import React from 'react';
import {StatusBar} from 'react-native';
import Colors from 'components/styles/Colors';

import AdminNavigator from './src/Navigator';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.content_color}
      />
      <AdminNavigator />
    </>
  );
};

export default App;
