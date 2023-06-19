"use client";
import { FC, ReactNode, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Toaster from "./modal/Toaster";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import { useLocale } from "next-intl";
import { setTheme } from "../../src/Redux/Slice/common";
type MainWrapperType = {
    children: ReactNode;
};

const MainWrapper: FC<MainWrapperType> = ({ children }) => {
    const theme = useAppSelector((state) => state.common.theme);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const theme = localStorage.getItem("theme") as "dark" | "light";

        theme && dispatch(setTheme(theme));
    }, []);
    const locale = useLocale();
    return (
        <html lang={locale} className={theme}>
            <body
                className={
                    "App flex max-w-[1920px] mx-auto relative flex-col h-full  dark:text-[hotPink]   text-black "
                }
                lang="en"
                data-theme={theme}
            >
                <Header />
                <main className="px-[15px] grow h-full min-h-screen ">
                    {" "}
                    {children}
                </main>
                <Footer />
                <Toaster />
            </body>
        </html>
    );
};

export default MainWrapper;
