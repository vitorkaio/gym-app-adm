import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from 'store/store';
import Colors from 'components/styles/Colors';

import AdminNavigator from './src/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.content_color}
      />
      <AdminNavigator />
    </Provider>
  );
};

export default App;
