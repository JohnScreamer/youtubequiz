import Image from "next/image";
import { FC } from "react";

type VideoInfoType = {
    title: string;
    img: string;
    isTitleViable: boolean | "right" | "wrong";
};

const VideoInfo: FC<VideoInfoType> = ({ img, isTitleViable, title }) => {
    return (
        <>
            <h2
                className="text-2xl flex justify-center items-center flex-col text-center  
                    animate-[scaleAnim_0.5s_ease-in-out] "
            >
                {isTitleViable === "right" ? (
                    <span className="text-green-700">Correct </span>
                ) : (
                    <span className="text-red-700">It was </span>
                )}
                <span className="font-bold">{title}</span>
                <div className=" p-2 shadow-[1px_3px_4px_black]  rounded-xl ">
                    <div className="relative    bg-red rounded-xl overflow-hidden   ">
                        <Image
                            src={img}
                            width={300}
                            height={230}
                            alt="playlist img"
                        />
                    </div>
                </div>
            </h2>
        </>
    );
};

export default VideoInfo;
