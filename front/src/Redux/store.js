import { configureStore } from '@reduxjs/toolkit';
import { BoardAPI } from './BoardAPI';

export default configureStore({
  reducer: {
    Board: BoardAPI,
  },
});
