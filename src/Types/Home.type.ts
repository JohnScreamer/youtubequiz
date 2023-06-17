import { CustomErrorType, GetPlaylistResponseType } from "./APIResponse.type";

export type HomeProps = { searchParams: { title: string; page: string } };
export type GetQuizType = (
    title: string,
    page: string
) => Promise<GetPlaylistResponseType | CustomErrorType>;

export type MainLayoutProps = {
    children: React.ReactNode;
    params: { locale: "en" | "ukr" };
};
