"use client";
import NextNProgress from "nextjs-progressbar";
import { FC, ReactNode } from "react";
import { useAppSelector } from "../../src/hooks/reduxHooks";
import Footer from "./Footer";
import Header from "./Header";
import Toaster from "./modal/Toaster";

type MainWrapperType = {
    children: ReactNode;
};

const MainWrapper: FC<MainWrapperType> = ({ children }) => {
    console.log("main wrapper");

    const theme = useAppSelector((state) => state.common.theme);
    return (
        <body
            className={"App flex max-w-[1920px]  flex-col h-full"}
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
