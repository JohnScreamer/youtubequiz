"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { useKing } from "../../../../src/hooks/useKing";
import { useScrollToTop } from "../../../../src/hooks/useScrollToTop";
import { VideoList } from "../../../../src/Redux/Slice/common";
import TournamentCard from "../Tournament/TournamentCard";
import Winner from "../Tournament/Winner/Winner";
import Title from "../uikit/Title/Title";
import vs from "./../../../../public/bvs.gif";

type KingOfTheMountainWrapperType = {
    data: VideoList;
};

const KingOfTheMountainWrapper: FC<KingOfTheMountainWrapperType> = ({
    data,
}) => {
    const { winner, currentSongs, pickVideo, totalSongs } = useKing({
        listArr: data.list,
    });
    useScrollToTop();
    const t = useTranslations("Index");
    return (
        <>
            {winner ? (
                <Winner winnerName={winner.title} />
            ) : (
                <div className="flex flex-col w-full    ">
                    <h1 className="text-center text-2xl">
                        {t("itemsLeft")}:{totalSongs}
                    </h1>
                    <div className="md:flex hidden relative  py-6 gap-6 ">
                        {currentSongs.map((el) => (
                            <Title key={el._id}>{el.title}</Title>
                        ))}
                        <div className="absolute right-[50%] top-[50%] w-[130px] h-[130px] translate-x-[50%] translate-y-[-50%] ">
                            <Image alt="vs logo" src={vs} fill={true} />
                        </div>
                    </div>
                    <div className="  flex md:flex-row     flex-col w-full gap-6">
                        {currentSongs.map((el) => (
                            <TournamentCard
                                key={el._id}
                                videoData={el}
                                pickVideo={pickVideo}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default KingOfTheMountainWrapper;
