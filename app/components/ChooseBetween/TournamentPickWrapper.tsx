"use client";
import React from "react";
import { FC } from "react";
import { useTournamentGame } from "../../../src/hooks/useTornamentGame";
import Title from "../uikit/Title/Title";
import { useScrollToTop } from "../../../src/hooks/useScrollToTop";
import Image from "next/image";
import vs from "./../../../public/bvs.gif";
import { useTranslations } from "next-intl";
import { PlaylistType } from "../../../src/Types/APIResponse.type";
import Winner from "../uikit/Winner/Winner";
import VideoCard from "./VideoCard";
type TournamentPickWrapperType = {
    videoList: PlaylistType;
};

const TournamentPickWrapper: FC<TournamentPickWrapperType> = ({
    videoList,
}) => {
    const { currentSongs, pickVideo, totalSongs, winner } = useTournamentGame(
        videoList.list
    );
    useScrollToTop();
    const t = useTranslations("Index");
    return (
        <>
            {winner ? (
                <Winner winnerName={winner.title} />
            ) : (
                <div className="flex flex-col w-full   ">
                    <h1 className="text-center dark:text-lightPink">
                        {t("round")} 1/{totalSongs / 2}
                    </h1>
                    <div className="md:flex hidden  py-6 gap-6   relative dark:text-lightPink">
                        {currentSongs.map((el) => (
                            <Title key={el._id}>{el.title}</Title>
                        ))}
                        <div className="absolute right-[50%] top-[50%] w-[100px] h-[100px] translate-x-[50%] translate-y-[-50%] ">
                            <Image alt="vs logo" src={vs} fill={true} />
                        </div>
                    </div>
                    <div className="  flex md:flex-row    flex-col w-full gap-6">
                        {currentSongs.map((el) => (
                            <VideoCard
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

export default TournamentPickWrapper;
