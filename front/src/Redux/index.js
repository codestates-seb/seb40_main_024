import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { store } from './store';
// eslint-disable-next-line import/no-unresolved
import logger from 'redux-logger';

const reducer = combineReducers({ todoReducer: store.reducer });

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
