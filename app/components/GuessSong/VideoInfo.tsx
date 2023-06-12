import Image from "next/image";
import { FC, useState } from "react";
import DefBtn from "../uikit/btn/DefBtn";
import SongInfoShow from "./SongInfoShow";

type VideoInfoType = {
    title: string;
    img: string;
    isTitleViable: boolean | "right" | "wrong";
};

const VideoInfo: FC<VideoInfoType> = ({ img, isTitleViable, title }) => {
    return (
        <>
            <div
                className="text-2xl flex justify-center relative items-center flex-col text-center  
                    animate-[scaleAnim_0.5s_ease-in-out] "
            >
                <SongInfoShow
                    img={img}
                    isTitleViable={isTitleViable}
                    title={title}
                />
            </div>
        </>
    );
};

export default VideoInfo;
