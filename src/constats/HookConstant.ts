import { VideoType } from "../Types/APIResponse.type";

type KingSettingsType = {
    currentSong: Array<VideoType>;
    winner: VideoType | null;
    tempWinner: VideoType | null;
};

export const KING_DEFAULT_SETTINGS: KingSettingsType = {
    currentSong: [],
    winner: null,
    tempWinner: null,
};
