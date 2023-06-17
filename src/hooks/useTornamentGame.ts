import { useRef, useState, useEffect } from "react";
import { VideoType } from "../Types/APIResponse.type";
type VideoNumType = 4 | 8 | 16 | 32 | 64 | 128;
export const useTournamentGame = (listArr: Array<VideoType>) => {
    const arr = useRef<Array<VideoType>>([]);
    const [currentSongs, setCurrentSongs] = useState<Array<VideoType>>([]);
    const winnerArr = useRef<Array<VideoType>>([]);
    const [winner, setWinner] = useState<VideoType | null>(null);
    const totalSongs = useRef(0);

    useEffect(() => {
        arr.current = listArr;
        totalSongs.current = arr.current.length;
        getSong(arr.current);
    }, []);

    const pickVideo = (id: string) => {
        const winner = currentSongs.find((el) => el._id === id);

        if (winner) {
            winnerArr.current.push(winner);
        }
        if (
            !arr.current.length &&
            winnerArr.current.length === 1 &&
            currentSongs.length === 2
        ) {
            setWinner(winnerArr.current[0]);
            return;
        }
        if (arr.current.length === 0 && winnerArr.current.length > 1) {
            totalSongs.current = winnerArr.current.length;
            arr.current = [...winnerArr.current];
            winnerArr.current = [];
        }
        getSong(arr.current);
    };

    const getSong = (arr: Array<VideoType>) => {
        if (arr.length > 1) {
            setCurrentSongs(arr.splice(0, 2));
        }
    };

    return {
        currentSongs,
        pickVideo,
        winner,
        totalSongs: totalSongs.current,
    };
};
