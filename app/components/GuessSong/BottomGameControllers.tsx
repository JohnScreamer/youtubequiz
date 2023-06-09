import { title } from "process";
import { FC } from "react";
import DefBtn from "../uikit/btn/DefBtn";
import GuessSongTextArea from "../uikit/GuessSongTextArea";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
type BottomGameControllersType = {
    songPoints: number;
    PlayExtraTime: () => void;
    isPlayed: false | 10 | 5;
    nextWrong: () => void;
    nextRight: () => void;
};

const BottomGameControllers: FC<BottomGameControllersType> = ({
    PlayExtraTime,
    isPlayed,
    nextRight,
    nextWrong,
    songPoints,
}) => {
    return (
        <>
            <h2>Point for song: {songPoints}</h2>
            <div className="flex gap-2 flex-col">
                <div className="flex gap-2">
                    <DefBtn onClick={PlayExtraTime} disabled={!!isPlayed}>
                        Extra 5 sec
                    </DefBtn>
                </div>
                <div className="flex gap-2 ">
                    <DefBtn
                        variant="success"
                        onClick={nextRight}
                        rightIcon={<DoneIcon />}
                        disabled={!!isPlayed}
                    >
                        I now
                    </DefBtn>
                    <DefBtn
                        variant="error"
                        rightIcon={<CancelIcon />}
                        onClick={nextWrong}
                        disabled={!!isPlayed}
                    >
                        Next
                    </DefBtn>
                </div>
            </div>
            <GuessSongTextArea
                title={title}
                nextSong={nextRight}
                isDisabled={!!isPlayed}
            />
        </>
    );
};

export default BottomGameControllers;
