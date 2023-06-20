import { FC } from "react";
import PlayBtn from "../uikit/btn/PlayBtn";
import Spinner from "../uikit/Spinner/Spinner";

type PlayType = {
    play: () => void;
    isSongReady: boolean;
};

const Play: FC<PlayType> = ({ play, isSongReady }) => {
    return <>{isSongReady ? <PlayBtn onClick={play} /> : <Spinner posNo />}</>;
};

export default Play;
