"use client";
import React from "react";
import { FC } from "react";
import TournamentCard from "./TournamentCard";
import Winner from "./Winner/Winner";
import { VideoList } from "../../../src/Redux/Slice/common";
import { useTournamentGame } from "../../../src/hooks/useTornamentGame";
import Title from "../uikit/Title/Title";

type TournamentPickWrapperType = {
    videoList: VideoList;
    number: number;
};

const TournamentPickWrapper: FC<TournamentPickWrapperType> = ({
    videoList,
}) => {
    const { currentSongs, pickVideo, totalSongs, winner } = useTournamentGame(
        videoList.list,
        8
    );

    return (
        <>
            {winner ? (
                <div>
                    <Winner winnerName={winner.title} />{" "}
                </div>
            ) : (
                <div className="flex flex-col w-full    ">
                    <h1 className="text-center">Round 1/{totalSongs / 2}</h1>
                    <div className="md:flex hidden  py-6 gap-6 ">
                        {currentSongs.map((el) => (
                            <Title key={el._id}>{el.title}</Title>
                        ))}
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

export default TournamentPickWrapper;
