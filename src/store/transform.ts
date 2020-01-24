import {createTransform} from 'redux-persist';
import {AuthState} from './modules/auth/types';

const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState: AuthState | any, _) => {
    // convert mySet to an Array.
    return {authUser: inboundState.authUser};
  },
  // transform state being rehydrated
  (outboundState: AuthState | any, _) => {
    // convert mySet back to a Set.
    return {...outboundState, authUser: outboundState.authUser};
  },
  // define which reducers this transform gets called for.
  {
    whitelist: ['authReducer'],
  },
);

export default SetTransform;
