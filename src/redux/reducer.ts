import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import jokes from './jokes';

const appReducer = combineReducers({
  jokes,
});

export default persistReducer(
  {
    key: 'root',
    storage: storage,
    whitelist: ['jokes']
  },
  appReducer
);
