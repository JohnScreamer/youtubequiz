import Link from "next/link";
import { FC } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DefBtn from "../uikit/btn/DefBtn";
import Logo from "./Logo";
import RightSide from "./RightSide";
type HeaderType = {};

const Header: FC<HeaderType> = () => {
    return (
        <header className=" p-4 flex justify-between  max-w-[1920px]  relative z-0">
            <div className="w-[150px] flex justify-start items-center">
                <Link href={"/"} className="relative z-2">
                    <DefBtn sx="grow-0 py-[8px] px-[8px] ">
                        <HomeIcon />
                    </DefBtn>
                </Link>
            </div>
            <Logo />
            <div className="flex gap-4 w-[150px]  justify-end">
                <RightSide />
            </div>
        </header>
    );
};

export default Header;
