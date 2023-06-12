"use client";
import Image from "next/image";
import NextNProgress from "nextjs-progressbar";
import { FC, ReactNode } from "react";
import { useAppSelector } from "../../src/hooks/reduxHooks";
import Footer from "./Footer";
import Header from "./Header";
import Toaster from "./modal/Toaster";
import sakura from "./../../public/sakura.gif";
type MainWrapperType = {
    children: ReactNode;
};

const MainWrapper: FC<MainWrapperType> = ({ children }) => {
    ("main wrapper");

    const theme = useAppSelector((state) => state.common.theme);
    return (
        <body
            className={
                "App flex max-w-[1920px] mx-auto relative   flex-col h-full"
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
    );
};

export default MainWrapper;
