"use client";
import { FC } from "react";
import { useGame } from "../../../src/hooks/useGame";
import { useScrollToTop } from "../../../src/hooks/useScrollToTop";
import { PlaylistType } from "../../../src/Types/APIResponse.type";
import Spinner from "../uikit/Spinner/Spinner";

import EndGame from "./EndGame/EndGame";
import Game from "./Game";

type GameWrapperType = {
    VideoList: PlaylistType;
};
const GameWrapper: FC<GameWrapperType> = ({ VideoList }) => {
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
                        <Spinner />
                    )}
                </div>
            </div>
        </>
    );
};

export default GameWrapper;
