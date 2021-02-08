import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

// Near reducers can be used
export const rootReducer = combineReducers({
  auth: authReducer,
});
