import { FC } from "react";
import Counter from "./Counter";
import Equalizer from "./Equalizer";
import QuestionMark from "../svg/QuestionMark";
import Play from "./Play";
import Replay10Icon from "@mui/icons-material/Replay10";
import DefBtn from "../uikit/btn/DefBtn";
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
        <div className="flex item-center justify-center relative w-full">
            {isPlayed ? (
                <>
                    <div className="flex flex-col gap-8 w-full  min-h-[250px] ">
                        <Counter startNum={isPlayed} />
                        <div className="mt-auto">
                            <Equalizer />
                        </div>
                    </div>
                </>
            ) : !isPlayBtnVisible ? (
                <Play isSongReady={isSongReady} play={play} />
            ) : (
                <>
                    {" "}
                    <QuestionMark />
                </>
            )}
        </div>
    );
};

export default PlayBtnArea;
