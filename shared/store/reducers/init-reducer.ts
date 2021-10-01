import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import type { RootState } from '../main';

// initial data value
const initialState: any = {
    initAppData: false,
};

export const initSlice: Slice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setInitAppData(state, action: PayloadAction<boolean>) {
            state.initAppData = action.payload;
        },
    },
});

// actions export
export const { setInitAppData } = initSlice.actions;

// getters export
export const selectInitAppData = (state: RootState) => {
    return state.initReducer.initAppData;
};

// exporting the reducer here, as we need to add this to the store
export default initSlice.reducer;
