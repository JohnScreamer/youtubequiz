import { YouTubeProps } from "react-youtube";

export const OPTS: YouTubeProps["opts"] = {
    height: "440",
    width: "850",

    playerVars: {
        modestBranding: 1,
        autoPlay: 1,
        start: 22,

        // https://developers.google.com/youtube/player_parameters
    },
};
const def = {
    height: "440",
    width: "850",

    playerVars: {
        modestBranding: 1,
        autoPlay: 1,
        start: 22,

        // https://developers.google.com/youtube/player_parameters
    },
};

export type OPTType = typeof def;
export const OPTSPreview: YouTubeProps["opts"] = {
    height: "220",
    width: "320",

    playerVars: {
        // https://developers.google.com/youtube/player_parameters
    },
};
