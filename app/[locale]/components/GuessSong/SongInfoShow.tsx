import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

type SongInfoShowType = {
    title: string;
    img: string;
    isTitleViable: boolean | "right" | "wrong";
};

const SongInfoShow: FC<SongInfoShowType> = ({ img, isTitleViable, title }) => {
    const t = useTranslations("Index");
    return (
        <>
            <span className="font-bold dark:color-[lightPink]  mb-4">
                {title}
            </span>
            <div className=" p-2 shadow-[1px_3px_4px_black] rounded-xl upStyleNoAnim  ">
                <div className="relative    bg-red rounded-xl overflow-hidden  w-[300px] h-[200px]   ">
                    <Image src={img} fill={true} alt="playlist img" />
                </div>
            </div>
        </>
    );
};

export default SongInfoShow;
