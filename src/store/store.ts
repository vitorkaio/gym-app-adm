import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import logger from 'redux-logger';
import {GymState} from './modules/gym/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {AuthState} from './modules/auth/types';
import SetTransform from './transform';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [SetTransform],
  // whitelist: ['authReducer'], // only navigation will be persisted
};

export interface ApplicationState {
  gymReducer: GymState;
  authReducer: AuthState;
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
  // composeWithDevTools(
  //   applyMiddleware(sagaMiddleware),
  //   // other store enhancers if any
  // ),
);

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default () => {
  return {store, persistor};
};
