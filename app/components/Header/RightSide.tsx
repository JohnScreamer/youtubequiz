import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import { toggleTheme } from "../../../src/Redux/Slice/common";
import LanguageToggle from "../Main/language/LanguageToggle";
import DefBtn from "../uikit/btn/DefBtn";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

type RightSideType = {};

const RightSide: FC<RightSideType> = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.common.theme);
    const toggle = () => {
        dispatch(toggleTheme());
    };
    return (
        <>
            <LanguageToggle />
            <div className="relative z-2 rounded-full flex items-center overflow-hidden">
                <DefBtn
                    onClick={toggle}
                    sx="grow-0 py-[8px] px-[8px] relative z-2 "
                >
                    {theme === "dark" ? <LightModeIcon /> : <NightlightIcon />}
                </DefBtn>
            </div>
        </>
    );
};

export default RightSide;
