import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import commonSlice from "./Slice/common";
const store = configureStore({
    reducer: { common: commonSlice },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;
