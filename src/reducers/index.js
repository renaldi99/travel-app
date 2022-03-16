import {combineReducers} from 'redux';
import AuthReducer from './auth';

const MainReducers = combineReducers({
  // all reducers
  AuthReducer,
});

export default MainReducers;
