import { useGuessSongs } from "./../../../src/hooks/useGuessSongs";
import { FC, useRef } from "react";
import YouTube from "react-youtube";
import BottomGameControllers from "./BottomGameControllers";
import VideoInfo from "./VideoInfo";
import PlayBtnArea from "./PlayBtnArea";
type GameType = {
    videoId: string;
    title: string;
    next: (points: number) => void;
    totalPoints: number;
    img: string;
};

const Game: FC<GameType> = ({ videoId, next, title, totalPoints, img }) => {
    const PlayerRef = useRef<YouTube>(null);

    const {
        songPoints,
        PlayExtraTime,
        isPlayBtnVisible,
        isPlayed,
        play,
        isTitleViable,
        nextRight,
        nextWrong,
        isSongReady,
        setTruthySongStatus,
        defOPTS,
        isPlayedReal,
    } = useGuessSongs({
        ref: PlayerRef,
        next,
        videoId,
    });

    return (
        <div className="max-w-[400px] w-full">
            <div className="hidden">
                <YouTube
                    videoId={videoId}
                    onReady={setTruthySongStatus}
                    onPlay={isPlayedReal}
                    opts={defOPTS}
                    ref={PlayerRef}
                />
            </div>
            <div className="min-h-[400px] relative flex justify-center items-center">
                {isTitleViable ? (
                    <VideoInfo
                        img={img}
                        isTitleViable={isTitleViable}
                        title={title}
                    />
                ) : (
                    <PlayBtnArea
                        isPlayBtnVisible={isPlayBtnVisible}
                        play={play}
                        videoId={videoId}
                        isPlayed={isPlayed}
                        isSongReady={isSongReady}
                    />
                )}
            </div>
            <BottomGameControllers
                PlayExtraTime={PlayExtraTime}
                isPlayed={isPlayed}
                nextRight={nextRight}
                nextWrong={nextWrong}
                songPoints={songPoints}
                title={title}
            />
        </div>
    );
};

export default Game;
