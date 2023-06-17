import { FC } from "react";
import PlayBtn from "../uikit/btn/PlayBtn";
import Spiner from "../uikit/Spiner/Spiner";

type PlayType = {
    play: () => void;
    isSongReady: boolean;
};

const Play: FC<PlayType> = ({ play, isSongReady }) => {
    return <>{isSongReady ? <PlayBtn onClick={play} /> : <Spiner posNo />}</>;
};

export default Play;
