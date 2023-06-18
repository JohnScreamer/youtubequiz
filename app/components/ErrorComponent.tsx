import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";
import DefBtn from "./uikit/btn/DefBtn";

type ErrorComponentType = {};

const ErrorComponent: FC<ErrorComponentType> = () => {
    const t = useTranslations("Index");
    return (
        <div className="flex justify-center items-center flex-col">
            <h2>{t("somethingWentWrong")}</h2>
            <Link href={"/"}>
                <DefBtn>{t("toMain")}</DefBtn>
            </Link>
        </div>
    );
};

export default ErrorComponent;
