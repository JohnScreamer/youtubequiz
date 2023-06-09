import { FC } from "react";

type FooterType = {};

const Footer: FC<FooterType> = () => {
    return (
        <footer className="shadow-[inset_1px_3px_4px_black] hover:shadow-[inset_5px_10px_10px_black] duration-300 p-4 justify-center flex items-center">
            footer
        </footer>
    );
};

export default Footer;
