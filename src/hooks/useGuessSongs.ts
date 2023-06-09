import { PlayerType, usePlayer } from "./usePlayer";
import { useEffect, useRef, useState } from "react";
import { OPTS, OPTType } from "../constats/youtubeConfig";
import { YouTubeProps } from "react-youtube";
import { randomSec } from "../utils/shufle";

type GuessSongsType = PlayerType & {
    next: (points: number) => void;
    videoId: string;
};
const defaultOPTION = OPTS;

export const useGuessSongs = ({ ref, next, videoId }: GuessSongsType) => {
    const [songPoints, setPoints] = useState(10);
    const [isPlayed, setPlayed] = useState<5 | 10 | false>(false);
    const [defOPTS, setOPTS] = useState<OPTType>(defaultOPTION);
    const { muteVideo, pauseVideo, playVideo } = usePlayer({ ref });
    const [isPlayBtnVisible, setBtnVisibleStatus] = useState(false);
    const [isTitleViable, setTitleStatus] = useState<
        "wrong" | "right" | boolean
    >(false);
    const [isSongReady, setSongStatus] = useState(false);

    useEffect(() => {
        setOPTS((prev: YouTubeProps["opts"]) => ({
            ...prev,
            playerVars: { start: randomSec() },
        }));
        console.log(defOPTS);

        setSongStatus(false);
    }, [videoId]);
    const setTruthySongStatus = () => {
        setSongStatus(true);
    };
    const startPlay = () => {
        console.log("start play");
        playVideo();
        setTimeout(() => {
            pauseVideo();
            setPlayed(false);
        }, 10000);
    };

    const PlayExtraTime = () => {
        if (!songPoints) {
            console.log("no points", songPoints);

            return;
        }
        setPlayed(5);
        setPoints((points) => points - 2);

        playVideo();
        setTimeout(() => {
            pauseVideo();
            setPlayed(false);
        }, 5000);
    };

    const play = () => {
        startPlay();
        setPlayed(10);
        setBtnVisibleStatus(true);
    };
    const nextWrong = () => {
        setTitleStatus("wrong");
        setPlayed(5);
        setTimeout(() => {
            setBtnVisibleStatus(false);
            next(0);
            setPlayed(false);
            setPoints(10);
            setTitleStatus(false);
        }, 3000);
    };
    const nextRight = () => {
        setTitleStatus("right");
        setPlayed(10);
        setTimeout(() => {
            setBtnVisibleStatus(false);
            next(songPoints);
            setPlayed(false);
            setPoints(10);
            setTitleStatus(false);
        }, 3000);
    };

    return {
        songPoints,
        PlayExtraTime,
        isPlayBtnVisible,
        play,
        isPlayed,
        isTitleViable,
        nextRight,
        nextWrong,
        isSongReady,
        setTruthySongStatus,
        defOPTS,
    };
};
