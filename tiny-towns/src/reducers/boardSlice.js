import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        value: {
           1: Array(16).fill(null),
           2: Array(16).fill(null),
           3: Array(16).fill(null),
           4: Array(16).fill(null)
        }
    },
    reducers: {
        replaceOneSquare: (state, action) => {
            const playerNumber = action.payload.player;
            const currentState = state.value;
            
            const newSpecifiedBoard = currentState[playerNumber].slice();
            newSpecifiedBoard[action.payload.index] = action.payload.newValue;

            state.value = {
                ...state.value,
                [playerNumber]: newSpecifiedBoard
            }

        },
        clearBoard: (state, action) => {
            const player = action.payload;

            state.value = {
                ...state.value,
                [player]: Array(16).fill(null)
            }
        },
        clearAllBoards: (state) => {
            state.value = {
                1: Array(16).fill(null),
                2: Array(16).fill(null),
                3: Array(16).fill(null),
                4: Array(16).fill(null)
            }
        },
        placeBuilding: (state, action) => {
            const player = action.payload.player;
            const newSpecifiedBoard = state.value[player].slice();
            newSpecifiedBoard[action.payload.buildingIndex] = action.payload.building;

            for (const index of action.payload.indicesToRemove) {
                newSpecifiedBoard[index] = null;
            }
            state.value = {
                ...state.value,
                [player]: newSpecifiedBoard
            }
        }
    }
});

export const { replaceOneSquare, clearBoard, placeBuilding, clearAllBoards } = boardSlice.actions;
export default boardSlice.reducer;
