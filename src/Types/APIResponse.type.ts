export interface VideoType {
    url: string;
    title: string;
    img: string;
    _id: string;
}

export interface PlaylistType {
    _id: string;
    totalAmount: number;
    list: VideoType[];
    title: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type GetPlaylistResponseType = {
    playlist: PlaylistType;
    page: number;
};

export type CustomErrorType = {
    message: string;
    error: true;
};
