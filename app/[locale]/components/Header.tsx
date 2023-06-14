import Link from "next/link";
import { FC } from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import HomeIcon from "@mui/icons-material/Home";
import DefBtn from "./uikit/btn/DefBtn";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import { toggleTheme } from "../../../src/Redux/Slice/common";
import LanguageToggle from "./language/LanguageToggle";
type HeaderType = {};

const Header: FC<HeaderType> = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.common.theme);
    const toggle = () => {
        dispatch(toggleTheme());
    };
    return (
        <header className=" p-4 flex justify-between  max-w-[1920px]  relative z-0">
            <div className="w-[150px] flex justify-start">
                <Link href={"/"} className="relative z-2">
                    <DefBtn sx="grow-0 py-[8px] px-[8px] ">
                        <HomeIcon />
                    </DefBtn>
                </Link>
            </div>
            <div className="flex ma:text-xl text-base break-keep font-extrabold gap-2 relative z-2 text-center  p-2 px-8 pixel">
                Quiz game
            </div>

            <div className="flex gap-4 w-[150px]  justify-end">
                <LanguageToggle />
                <div className="relative z-2 rounded-full flex items-center overflow-hidden">
                    <DefBtn
                        onClick={toggle}
                        sx="grow-0 py-[8px] px-[8px] relative z-2 "
                    >
                        {theme === "dark" ? (
                            <LightModeIcon />
                        ) : (
                            <NightlightIcon />
                        )}
                    </DefBtn>
                </div>
            </div>
        </header>
    );
};

export default Header;
