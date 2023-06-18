import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import ReduxProvider from "../components/ReduxProvider";
import MainWrapper from "../components/MainWrapper";
import { NextIntlClientProvider } from "next-intl";
import { MainLayoutProps } from "../../src/Types/Home.type";

export const metadata = {
    title: "YoutubeQuiz",
    description: "Super cool  game",
};

export default async function RootLayout({
    children,
    params,
}: MainLayoutProps) {
    const locale = useLocale();
    if (params.locale !== locale) {
        notFound();
    }
    let messages: any;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ReduxProvider>
                <MainWrapper>{children}</MainWrapper>
            </ReduxProvider>
        </NextIntlClientProvider>
    );
}
