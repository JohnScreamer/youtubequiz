import { useTranslations } from "next-intl";
import { FC } from "react";
import SongSvg from "./SongSvg";

type QuestionMarkType = {};

const QuestionMark: FC<QuestionMarkType> = () => {
    const t = useTranslations("Index");
    return (
        <div className="flex gap-3 justify-center relative flex-col items-center animate-[scaleAnim_0.5s_ease-in-out] dark:text-[lightPink] ">
            <div className="rounded-full  dark:upStyleNoAnimDarkRound">
                {" "}
                <svg
                    width="170px"
                    height="170px"
                    viewBox="0 0 12 12"
                    enableBackground="new 0 0 12 12"
                    id="Слой_1"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6,0C2.6862793,0,0,2.6862793,0,6s2.6862793,6,6,6s6-2.6862793,6-6S9.3137207,0,6,0z M6.5,9.5h-1v-1h1V9.5z   M7.2651367,6.1738281C6.7329102,6.5068359,6.5,6.6845703,6.5,7v0.5h-1V7c0-0.9023438,0.7138672-1.3486328,1.2348633-1.6738281  C7.2670898,4.9931641,7.5,4.8154297,7.5,4.5c0-0.5517578-0.4487305-1-1-1h-1c-0.5512695,0-1,0.4482422-1,1V5h-1V4.5  c0-1.1025391,0.8969727-2,2-2h1c1.1030273,0,2,0.8974609,2,2C8.5,5.4023438,7.7861328,5.8486328,7.2651367,6.1738281z"
                        className=" dark:fill-lightPink fill-black"
                    />
                </svg>
            </div>
            <div className="absolute left-[87%]">
                <SongSvg />
            </div>
            <p className="text-[25px] w-full dark:staticNeonStyleGreen">
                {t("writeNameOfTheSong")}
            </p>
        </div>
    );
};

export default QuestionMark;
