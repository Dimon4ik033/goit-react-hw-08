import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	name: '',
}

const sliceFilter = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    }
})

export const filterReducer = sliceFilter.reducer;
export const { changeFilter } = sliceFilter.actions;

export const selectFilter = state => state.filters.name;
