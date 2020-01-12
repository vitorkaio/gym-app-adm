import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
// import logger from 'redux-logger';
import {GymState} from './modules/gym/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

export interface ApplicationState {
  gymReducer: GymState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
