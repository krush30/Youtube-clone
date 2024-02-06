import { createSlice } from "@reduxjs/toolkit";

const show = createSlice({
    name: "show",
    initialState: {
        showSidebar: true,
    },
    reducers: {
        showSidebarMan: (state, action) => {
            state.showSidebar = !state.showSidebar;
        },
        closeshowSidebar: (state) => {
            state.showSidebar = false;
        }
    }
})

export const { showSidebarMan, closeshowSidebar } = show.actions;
export default show.reducer;