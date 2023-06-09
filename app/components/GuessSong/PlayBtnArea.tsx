import { FC } from "react";
import Counter from "./Counter";
import Equalizer from "./Equalizer";
import QuestionMark from "../svg/QuestionMark";
import PlayBtn from "../uikit/btn/PlayBtn";
import Play from "./Play";

type PlayBtnAreaType = {
    isPlayed: false | 5 | 10;
    play: () => void;
    isPlayBtnVisible: boolean;
    isSongReady: boolean;
};

const PlayBtnArea: FC<PlayBtnAreaType> = ({
    isPlayed,
    isPlayBtnVisible,
    play,
    isSongReady,
}) => {
    return (
        <div className="flex item-center justify-center">
            {isPlayed ? (
                <div className="flex flex-col gap-8  min-h-[250px] ">
                    <Counter startNum={isPlayed} />
                    <div className="mt-auto">
                        <Equalizer />
                    </div>
                </div>
            ) : !isPlayBtnVisible ? (
                <Play isSongReady={isSongReady} play={play} />
            ) : (
                <QuestionMark />
            )}
        </div>
    );
};

export default PlayBtnArea;
