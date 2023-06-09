import { useState, useEffect, useRef } from "react";
import { VideoType } from "../Redux/Slice/common";
import { shuffleArr } from "../utils/shufle";

export const useGame = (listArr: Array<VideoType>) => {
    const arr = useRef<Array<VideoType>>([]);
    const [currentSong, setCurrentSong] = useState<VideoType | null>(null);
    const [isGameEnd, setGameStatus] = useState(false);
    const [totalPoints, setPoints] = useState(0);
    const totalSongs = useRef(0);
    useEffect(() => {
        arr.current = shuffleArr(listArr);
        totalSongs.current = arr.current.length;
        getSong(arr.current);
    }, []);
    const getSong = (arr: Array<VideoType>) => {
        if (!arr.length) {
            setGameStatus(true);
            console.log("game over");
            return;
        }
        const song = arr.pop();

        setCurrentSong(song || null);
    };
    const nextSong = (songPoints: number) => {
        setPoints((prev) => prev + songPoints);
        getSong(arr.current);
    };

    return {
        currentSong,
        nextSong,
        totalPoints,
        isGameEnd,
        totalSongs: totalSongs.current,
    };
};
