import { useEffect, useRef, useState } from "react";
import { VideoType } from "../Redux/Slice/common";

export const useKing = ({ listArr }: { listArr: Array<VideoType> }) => {
    const arr = useRef<Array<VideoType>>([]);
    const [currentSongs, setCurrentSongs] = useState<Array<VideoType>>([]);
    const [winner, setWinner] = useState<VideoType | null>(null);
    const totalSongs = useRef(0);
    const [tempWinner, setTempWinner] = useState<VideoType | null>(null);

    useEffect(() => {
        arr.current = listArr;
        totalSongs.current = arr.current.length;
        getFirstSong(arr.current);
    }, []);

    const pickVideo = (id: string) => {
        const winner = currentSongs.find((el) => el._id === id);
        totalSongs.current = arr.current.length + 2;
        if (winner) {
            setTempWinner(winner);
        }
        getSong(winner);
    };

    const getSong = (winner: VideoType) => {
        if (arr.current.length === 0) {
            setWinner(tempWinner);
            return;
        }
        setCurrentSongs([arr.current.pop(), winner]);
    };

    const getFirstSong = (arr: Array<VideoType>) => {
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
