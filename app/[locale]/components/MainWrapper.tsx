"use client";
import NextNProgress from "nextjs-progressbar";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Toaster from "./modal/Toaster";
import { useAppSelector } from "../../../src/hooks/reduxHooks";
import { useLocale } from "next-intl";
type MainWrapperType = {
    children: ReactNode;
};

const MainWrapper: FC<MainWrapperType> = ({ children }) => {
    const theme = useAppSelector((state) => state.common.theme);
    const locale = useLocale();
    return (
        <html lang={locale} className={theme}>
            <body
                className={
                    "App flex max-w-[1920px] mx-auto relative flex-col h-full  dark:text-[hotPink] text-black "
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
                <NextNProgress />
                <Toaster />
            </body>
        </html>
    );
};

export default MainWrapper;
