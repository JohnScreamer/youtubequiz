import { useTranslations } from "next-intl";
import { FC } from "react";

type FooterType = {};

const Footer: FC<FooterType> = () => {
    return (
        <footer className="shadow-[inset_1px_3px_4px_black] mt-6 hover:shadow-[inset_5px_10px_10px_black] duration-300 p-6 justify-center flex items-center"></footer>
    );
};

export default Footer;
