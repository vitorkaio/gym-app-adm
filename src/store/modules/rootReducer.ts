import {combineReducers} from 'redux';
import gymReducer from './gym/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
  gymReducer,
  authReducer,
});
