"use client";
import { FC } from "react";
import { useGame } from "../../../src/hooks/useGame";
import { useScrollToTop } from "../../../src/hooks/useScrollToTop";
import { VideoList } from "../../../src/Redux/Slice/common";
import EndGame from "./EndGame/EndGame";
import Game from "./Game";

type GameWrappperType = {
    VideoList: VideoList;
};
const GameWrappper: FC<GameWrappperType> = ({ VideoList }) => {
    const { currentSong, nextSong, totalPoints, isGameEnd, totalSongs } =
        useGame(VideoList.list);
    useScrollToTop();

    if (isGameEnd) {
        return <EndGame totalPoints={totalPoints} totalSongs={totalSongs} />;
    }
    return (
        <>
            <div className=" flex justify-between  h-full ">
                <div>
                    {currentSong ? (
                        <Game
                            next={nextSong}
                            videoId={currentSong.url}
                            title={currentSong.title}
                            totalPoints={totalPoints}
                            img={currentSong.img}
                        />
                    ) : (
                        "...LOADING"
                    )}
                </div>
            </div>
        </>
    );
};

export default GameWrappper;
