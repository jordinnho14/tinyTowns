import { configureStore, createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        value: Array(16).fill(null)
    },
    reducers: {
        replaceOneSquare: (state, action) => {
            const newSquares = state.value.slice();
            newSquares[action.payload.index] = action.payload.newValue;
            state.value = newSquares;
        },
        clearBoard: (state) => {
            state.value = Array(16).fill(null);
        },
        placeBuilding: (state, action) => {
            const newSquares = state.value.slice();
            newSquares[action.payload.buildingIndex] = action.payload.building;
            for (const index of action.payload.indicesToRemove) {
                newSquares[index] = null;
            }
            state.value = newSquares;
        }
    }
});

export const { replaceOneSquare, clearBoard, placeBuilding } = boardSlice.actions;
export default boardSlice.reducer;
