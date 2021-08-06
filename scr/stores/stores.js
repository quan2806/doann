import incrementReducer from './reducers/incrementReducer';
import {createStore} from 'redux';
import returnReducers from './reducers';

const store = createStore(returnReducers);
export {store};
