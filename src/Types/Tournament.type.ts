import { CustomErrorType, PlaylistType } from "./APIResponse.type";

export type TournamentPropsType = {
    searchParams: { id: string; rounds: string };
};

export type GetListType = (
    id: string
) => Promise<PlaylistType | CustomErrorType>;
