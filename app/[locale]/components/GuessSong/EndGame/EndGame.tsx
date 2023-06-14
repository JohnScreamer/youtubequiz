import { FC } from "react";
import bg from "./../../../../../public/UQSQcP1heLKO.gif";
import Image from "next/image";
import { useTranslations } from "next-intl";
type EndGameType = {
    totalSongs: number;
    totalPoints: number;
};

const EndGame: FC<EndGameType> = ({ totalPoints, totalSongs }) => {
    const t = useTranslations("Index");
    return (
        <div className="min-h-screen flex  items-center flex-col gap-3 ">
            <h1 className="pixel text-3xl mt-[35%] mb-[20px] font-bold">
                {t("congratulation")}
            </h1>
            <div className="p-4 upStyleNoAnim text-2xl w-[300px] relative h-[300px] overflow-hidden  text-center">
                <Image src={bg} fill={true} alt="bg" className="z-0 relative" />
            </div>
            <div className="z-0 pixel relative">
                {t("youGet")}:{totalPoints}/{totalSongs * 10}
            </div>
        </div>
    );
};

export default EndGame;
