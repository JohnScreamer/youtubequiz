import "./globals.css";
import { Inter } from "next/font/google";

import ReduxProvider from "./components/ReduxProvider";
import MainWrapper from "./components/MainWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ReduxProvider>
                <MainWrapper>{children}</MainWrapper>
            </ReduxProvider>
        </html>
    );
}
