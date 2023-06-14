import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import RoundsCount from "../../Tournament/RoundsCount";
import DefBtn from "../../uikit/btn/DefBtn";
import { Response } from "../../../../../src/Redux/Slice/common";
import { useTranslations } from "next-intl";
type ListItemType = {
    list: Response;
    id: string;
};

const ListItem: FC<ListItemType> = ({ list: { title, list }, id }) => {
    const t = useTranslations("Index");
    const imgArr = list.slice(0, 12).map((el) => (
        <div className=" p-2 downStyle " key={el._id}>
            <div className="relative  pt-[70%] rounded-xl overflow-hidden  w-full ">
                <Image src={el.img} fill={true} alt="playlist img" />
            </div>
        </div>
    ));

    return (
        <li className="flex gap-1 flex-col p-3 downStyle  w-full">
            <h4 className="text-center ">
                {t("items")}: {list.length}
            </h4>
            <h2 className="text-base capitalize pixel  font-bold p-1 flex flex-col gap-2 text-center ">
                {title}
            </h2>

            <div className=" gap-1 grid-cols-4 grid mt-auto mb-2">{imgArr}</div>
            <div className="flex flex-col gap-2 ">
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
