import { MutableRefObject } from "react";

export type YoutubeType = {
    internalPlayer: {
        pauseVideo: () => void;
        playVideo: () => void;
        mute: () => void;
        unMute: () => void;
    };
};

export type PlayerType = {
    ref: MutableRefObject<null> | MutableRefObject<YoutubeType>;
};

export const usePlayer = ({ ref }: PlayerType) => {
    const pauseVideo = () => {
        if (!ref?.current) return;
        ref?.current.internalPlayer.pauseVideo();
    };
    const playVideo = () => {
        ref?.current, "here";
        if (!ref?.current) return;
        ref?.current.internalPlayer.playVideo();
    };
    const muteVideo = () => {
        if (!ref?.current) return;
        ref?.current.internalPlayer.mute();
    };
    const unMuteVideo = () => {
        if (!ref?.current) return;
        ref?.current.internalPlayer.unMute();
    };
    // const setVolum = () => {
    //     if (!ref?.current) return;
    //     ref?.current.internalPlayer.setVolume(4);
    // };

    return { playVideo, muteVideo, unMuteVideo, pauseVideo };
};
