import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoType } from "../../Types/APIResponse.type";

type InitType = {
    theme: "light" | "dark";
    allVideoList: Array<VideoType>;
};

const initialState: InitType = {
    theme: "dark",
    allVideoList: [],
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", state.theme);
        },
        setVideoList: (state, action: PayloadAction<Array<VideoType>>) => {
            state.allVideoList = [...state.allVideoList, ...action.payload];
        },
        setTheme: (state, action: PayloadAction<"light" | "dark">) => {
            state.theme = action.payload;
        },
    },
});

export const { toggleTheme, setVideoList, setTheme } = commonSlice.actions;
export default commonSlice.reducer;
