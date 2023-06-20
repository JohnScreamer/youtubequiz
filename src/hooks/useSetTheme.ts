import { useEffect } from "react";
import { setTheme } from "../Redux/Slice/common";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const useSetTheme = () => {
    const theme = useAppSelector((state) => state.common.theme);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const theme = localStorage.getItem("theme") as "dark" | "light";

        theme && dispatch(setTheme(theme));
    }, []);

    return theme;
};
