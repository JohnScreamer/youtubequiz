import Link from "next/link";
import { FC } from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import HomeIcon from "@mui/icons-material/Home";
import DefBtn from "./uikit/btn/DefBtn";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import { toggleTheme } from "../../src/Redux/Slice/common";
import Image from "next/image";
import sakura from "./../../public/sakura.gif";
type HeaderType = {};

const Header: FC<HeaderType> = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.common.theme);
    const toggle = () => {
        dispatch(toggleTheme());
    };
    return (
        <header className=" p-4 flex justify-between  max-w-[1920px]  relative z-0">
            <Link href={"/"} className="relative z-2">
                <DefBtn sx="grow-0 py-[8px] px-[8px] ">
                    <HomeIcon />
                </DefBtn>
            </Link>
            <div className="flex ma:text-xl text-base font-extrabold gap-2 relative z-2 text-center  p-2 px-8 pixel">
                Quiz game
            </div>
            <div className="relative z-2">
                <DefBtn
                    onClick={toggle}
                    sx="grow-0 py-[8px] px-[8px] relative z-2 "
                >
                    {theme === "dark" ? <LightModeIcon /> : <NightlightIcon />}
                </DefBtn>
            </div>
        </header>
    );
};

export default Header;
