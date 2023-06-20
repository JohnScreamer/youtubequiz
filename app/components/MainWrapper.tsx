"use client";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header/Header";
import Toaster from "./modal/Toaster";
import { useLocale } from "next-intl";
import { useSetTheme } from "../../src/hooks/useSetTheme";
type MainWrapperType = {
    children: ReactNode;
};

const MainWrapper: FC<MainWrapperType> = ({ children }) => {
    const locale = useLocale();
    const theme = useSetTheme();
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
