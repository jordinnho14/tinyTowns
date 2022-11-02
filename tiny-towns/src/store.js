import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './reducers/boardSlice.js';

export default configureStore({
    reducer: {
        board: boardReducer
    }
});