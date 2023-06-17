import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import RoundsCount from "../../Tournament/RoundsCount";
import DefBtn from "../../uikit/btn/DefBtn";

import { useTranslations } from "next-intl";
import { PlaylistType } from "../../../../src/Types/APIResponse.type";
type ListItemType = {
    list: PlaylistType;
    id: string;
};

const ListItem: FC<ListItemType> = ({ list: { title, list }, id }) => {
    const t = useTranslations("Index");
    const imgArr = list.slice(0, 12).map((el) => (
        <div
            className=" upStyleNoAnim dark:upStyleNoAnimDarkSmall overflow-hidden"
            key={el._id}
        >
            <div className="relative  pt-[70%]  overflow-hidden  p-[4px] rounded-xl blur-sm hover:blur-none duration-200  w-full ">
                <Image
                    src={el.img}
                    key={el._id}
                    fill={true}
                    alt="playlist img"
                />
            </div>
        </div>
    ));

    return (
        <li className="flex gap-1 flex-col p-2  upStyleNoAnim  w-full backdrop-blur-lg">
            <h4 className="text-center dark:text-[lightPink]">
                {t("items")}: {list.length}
            </h4>
            <h2 className="text-base  pixel  font-bold p-2 flex flex-col  text-center dark:staticNeonStylePurple ">
                {title}
            </h2>

            <div className=" gap-1 grid-cols-3 grid mt-auto mb-2">{imgArr}</div>
            <div className="flex flex-col gap-2 dark:text-[lightPink] ">
                <Link className="w-full" href={`/guessSong?id=${id}`}>
                    <DefBtn sx="py-[8px]">{t("guessSong")}</DefBtn>
                </Link>
                <Link className="w-full" href={`/king?id=${id}`}>
                    <DefBtn sx="py-[8px]"> {t("kingOfYheMountain")}</DefBtn>
                </Link>
                <RoundsCount id={id} num={list.length} />
            </div>
        </li>
    );
};

export default ListItem;
