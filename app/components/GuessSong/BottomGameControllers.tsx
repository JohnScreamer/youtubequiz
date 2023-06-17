import { FC } from "react";
import DefBtn from "../uikit/btn/DefBtn";
import GuessSongTextArea from "../uikit/GuessSongTextArea";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTranslations } from "next-intl";
type BottomGameControllersType = {
    songPoints: number;
    PlayExtraTime: () => void;
    isPlayed: false | 10 | 5;
    nextWrong: () => void;
    nextRight: () => void;
    title: string;
    isSongReady: boolean;
};

const BottomGameControllers: FC<BottomGameControllersType> = ({
    PlayExtraTime,
    isPlayed,
    nextRight,
    nextWrong,
    songPoints,
    title,
    isSongReady,
}) => {
    const t = useTranslations("Index");
    return (
        <>
            <h2
                className={`dark:text-lightPink ${
                    isPlayed ? "opacity-0" : "opacity-100"
                }`}
            >
                {t("pointForSong")}: {songPoints}
            </h2>

            <div className="flex gap-2 flex-col">
                <div className="flex gap-2">
                    <DefBtn
                        onClick={PlayExtraTime}
                        disabled={!!isPlayed || !isSongReady}
                    >
                        {t("extraSec")}
                    </DefBtn>
                </div>
                <div className="flex gap-2 ">
                    <DefBtn
                        variant="success"
                        onClick={nextRight}
                        rightIcon={<DoneIcon />}
                        disabled={!!isPlayed || !isSongReady}
                    >
                        {t("iKnow")}
                    </DefBtn>
                    <DefBtn
                        variant="error"
                        rightIcon={<CancelIcon />}
                        onClick={nextWrong}
                        disabled={!!isPlayed || !isSongReady}
                    >
                        {t("next")}
                    </DefBtn>
                </div>
            </div>
            <GuessSongTextArea
                title={title}
                nextSong={nextRight}
                isDisabled={!!isPlayed || !isSongReady}
            />
        </>
    );
};

export default BottomGameControllers;
