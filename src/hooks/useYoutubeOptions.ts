import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Settings = {
    height: "440",
    width: "850",

    playerVars: {
        modestBranding: 0,
        autoPlay: 1,
        start: 0,
    },
};
type YouTubeType = typeof Settings;

const changeWindow = (
    setState: Dispatch<
        SetStateAction<{
            height: string;
            width: string;
            playerVars: {
                modestBranding: number;
                autoPlay: number;
                start: number;
            };
        }>
    >
) => {
    if (document.documentElement.clientWidth < 1800) {
        setState((data) => ({ ...data, width: "650", height: "380" }));
    }
    if (document.documentElement.clientWidth < 1440) {
        setState((data) => ({ ...data, width: "450", height: "320" }));
    }
    if (document.documentElement.clientWidth < 1024) {
        setState((data) => ({ ...data, width: "320", height: "240" }));
    }
    if (document.documentElement.clientWidth < 375) {
        setState((data) => ({ ...data, width: "270", height: "210" }));
    }
    if (document.documentElement.clientWidth > 1800) {
        setState((data) => ({ ...data, width: "850", height: "440" }));
    }
};

export const useYoutubeOptions = () => {
    const [state, setState] = useState<YouTubeType>(Settings);
    document.documentElement.clientWidth;

    useEffect(() => {
        changeWindow(setState);
        window.addEventListener("resize", () => {
            changeWindow(setState);
        });

        return () => {
            window.addEventListener("resize", () => {
                // if(document.documentElement.clientWidth>)
            });
        };
    }, []);

    return state;
};
