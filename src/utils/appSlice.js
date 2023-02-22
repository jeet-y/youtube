import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        currentVideo: []
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        currentVideoPlaying: (state, action) => {
            state.currentVideo[0] = action.payload;
        }
    }
})

export default appSlice.reducer;

export const { toggleMenu, closeMenu, currentVideoPlaying } = appSlice.actions;