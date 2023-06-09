import { SONGS, SONGS2 } from "./../../constats/songs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type VideoType = {
    url: string;
    title: string;
    img: string;
    _id: string;
};
export type VideoList = {
    title: string;
    list: Array<VideoType>;
};
export interface Response {
    _id: string;
    totalAmount: number;
    list: List[];
    title: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface List {
    url: string;
    title: string;
    img: string;
    _id: string;
}

type InitType = {
    theme: "light" | "dark";
    allVideoList: Array<Response>;
};

const initialState: InitType = {
    theme: "light",
    allVideoList: [],
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
        },
        setVideoList: (state, action: PayloadAction<Array<Response>>) => {
            state.allVideoList = [...state.allVideoList, ...action.payload];
        },
    },
});

export const { toggleTheme, setVideoList } = commonSlice.actions;
export default commonSlice.reducer;
