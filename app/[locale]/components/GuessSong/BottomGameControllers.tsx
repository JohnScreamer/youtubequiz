import { FC } from "react";
import DefBtn from "../uikit/btn/DefBtn";
import GuessSongTextArea from "../uikit/GuessSongTextArea";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import { shortTitle } from "../../../../src/utils/shortTitle";
import { useTranslations } from "next-intl";
type BottomGameControllersType = {
    songPoints: number;
    PlayExtraTime: () => void;
    isPlayed: false | 10 | 5;
    nextWrong: () => void;
    nextRight: () => void;
    title: string;
};

const BottomGameControllers: FC<BottomGameControllersType> = ({
    PlayExtraTime,
    isPlayed,
    nextRight,
    nextWrong,
    songPoints,
    title,
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
                    <DefBtn onClick={PlayExtraTime} disabled={!!isPlayed}>
                        {t("extraSec")}
                    </DefBtn>
                </div>
                <div className="flex gap-2 ">
                    <DefBtn
                        variant="success"
                        onClick={nextRight}
                        rightIcon={<DoneIcon />}
                        disabled={!!isPlayed}
                    >
                        {t("iKnow")}
                    </DefBtn>
                    <DefBtn
                        variant="error"
                        rightIcon={<CancelIcon />}
                        onClick={nextWrong}
                        disabled={!!isPlayed}
                    >
                        {t("next")}
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
