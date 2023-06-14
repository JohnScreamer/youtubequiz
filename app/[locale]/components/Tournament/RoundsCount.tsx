"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC, useState } from "react";
import { ROUNDS } from "../../../../src/utils/rounds";

import DefBtn from "../uikit/btn/DefBtn";

type RoundsCountType = {
    num: number;
    id: string;
};

const RoundsCount: FC<RoundsCountType> = ({ num, id }) => {
    const [isVisible, setVisibleStatus] = useState(false);
    const toggleStatus = () => {
        setVisibleStatus(true);
    };
    const t = useTranslations("Index");
    const list = ROUNDS.map((el) => {
        if (el < num) {
            return (
                <Link
                    key={el}
                    className="w-full"
                    href={`/tournamentPick?id=${id}&rounds=${el}`}
                >
                    <DefBtn onClick={toggleStatus}>{el}</DefBtn>
                </Link>
            );
        }
        return null;
    });
    return (
        <div className="flex gap-2">
            {isVisible ? (
                list
            ) : (
                <DefBtn sx="py-[8px]" onClick={toggleStatus}>
                    {t("pickBest")}{" "}
                </DefBtn>
            )}
        </div>
    );
};

export default RoundsCount;
