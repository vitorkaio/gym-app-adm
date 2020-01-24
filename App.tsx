import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import createStore from 'store/store';
import Colors from 'components/styles/Colors';
import {PersistGate} from 'redux-persist/integration/react';
import AdminNavigator from './src/Navigator';

const {store, persistor} = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.content_color}
        />
        <AdminNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
