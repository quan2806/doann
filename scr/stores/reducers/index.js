import {combineReducers} from 'redux';
import incrementReducer from './incrementReducer';
import userReducer from './user';

const allReducers = combineReducers({
  incrementReducer,
  userReducer,
});

const returnReducers = (state, action) => {
  return allReducers(state, action);
};

export default returnReducers;
