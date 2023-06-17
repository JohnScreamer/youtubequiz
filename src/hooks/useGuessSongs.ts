import { PlayerType, usePlayer } from "./usePlayer";
import { useEffect, useRef, useState } from "react";
import { OPTS, OPTType } from "../constats/youtubeConfig";
import { YouTubeProps } from "react-youtube";
import { randomSec } from "../utils/shufle";
import { SETTINGS } from "../constats/GameSettings";

type GuessSongsType = PlayerType & {
    next: (points: number) => void;
    videoId: string;
};
type TitleViableType = boolean | "wrong" | "right";
const defaultOPTION = OPTS;

export const useGuessSongs = ({ ref, next, videoId }: GuessSongsType) => {
    const [songPoints, setPoints] = useState<number>(
        SETTINGS.GUESS_SONG.START_POINT_FOR_SONG
    );
    const [isPlayed, setPlayed] = useState<number | false>(false);
    const [isRealPlay, setRealPlay] = useState(false);

    const [defOPTS, setOPTS] = useState<OPTType>(defaultOPTION);
    const { pauseVideo, playVideo } = usePlayer({ ref });
    const [isPlayBtnVisible, setBtnVisibleStatus] = useState(false);
    const [isTitleViable, setTitleStatus] = useState<TitleViableType>(false);
    const [isSongReady, setSongStatus] = useState(false);
    const time = useRef(0);
    useEffect(() => {
        time.current = randomSec();

        setOPTS((prev: YouTubeProps["opts"]) => ({
            ...prev,
            playerVars: { start: time.current },
        }));
        setRealPlay(false);
        setSongStatus(false);
    }, [videoId]);
    const setTruthySongStatus = () => {
        setSongStatus(true);
    };
    const isPlayedReal = () => {
        setRealPlay(true);
    };

    const startPlay = () => {
        playVideo();
        setTimeout(() => {
            pauseVideo();
            setPlayed(false);
            setRealPlay(false);
        }, SETTINGS.GUESS_SONG.TIME_FOR_PLAY);
    };
    const PlayAgain = (timer: number) => {
        if (!timer) {
            return;
        }

        setTimeout(() => {
            PlayAgain(timer - 1);
        }, SETTINGS.GUESS_SONG.RESTART_PLAYER_TIME);
    };

    const PlayExtraTime = () => {
        if (!songPoints) {
            return;
        }
        setPlayed(SETTINGS.GUESS_SONG.EXTRA_TIME_SEC);
        setPoints((points) => points - SETTINGS.GUESS_SONG.MINUS_POINTS_FOR_ET);

        playVideo();
        setTimeout(() => {
            pauseVideo();
            setPlayed(false);
            setRealPlay(false);
        }, SETTINGS.GUESS_SONG.EXTRA_TIME);
        setTimeout(() => {
            PlayAgain(SETTINGS.GUESS_SONG.PLAY_TIME_SEC);
        }, SETTINGS.GUESS_SONG.RESTART_PLAYER_TIME);
    };

    const play = () => {
        startPlay();
        setPlayed(10);
        setBtnVisibleStatus(true);
        setTimeout(() => {
            PlayAgain(20);
        }, SETTINGS.GUESS_SONG.RESTART_PLAYER_TIME);
    };

    const nextWrong = () => {
        setTitleStatus("wrong");
        setPlayed(SETTINGS.GUESS_SONG.EXTRA_TIME_SEC);
        setTimeout(() => {
            setBtnVisibleStatus(false);
            next(0);
            setPlayed(false);
            setPoints(SETTINGS.GUESS_SONG.START_POINT_FOR_SONG);
            setTitleStatus(false);
        }, SETTINGS.GUESS_SONG.NEXT_TIME);
    };
    const nextRight = () => {
        setTitleStatus("right");
        setPlayed(SETTINGS.GUESS_SONG.PLAY_TIME_SEC);
        setTimeout(() => {
            setBtnVisibleStatus(false);
            next(songPoints);
            setPlayed(false);
            setPoints(SETTINGS.GUESS_SONG.START_POINT_FOR_SONG);
            setTitleStatus(false);
        }, SETTINGS.GUESS_SONG.NEXT_TIME);
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
        isPlayedReal,
    };
};
