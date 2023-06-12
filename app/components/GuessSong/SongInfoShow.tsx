import Image from "next/image";
import { FC } from "react";

type SongInfoShowType = {
    title: string;
    img: string;
    isTitleViable: boolean | "right" | "wrong";
};

const SongInfoShow: FC<SongInfoShowType> = ({ img, isTitleViable, title }) => {
    return (
        <>
            {isTitleViable === "right" ? (
                <span className="text-green-700">Correct </span>
            ) : (
                <span className="text-red-700">It was </span>
            )}
            <span className="font-bold">{title}</span>
            <div className=" p-2 shadow-[1px_3px_4px_black] rounded-xl  ">
                <div className="relative    bg-red rounded-xl overflow-hidden  w-[300px] h-[200px]   ">
                    <Image src={img} fill={true} alt="playlist img" />
                </div>
            </div>
        </>
    );
};

export default SongInfoShow;
