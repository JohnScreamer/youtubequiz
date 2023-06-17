import { VideoType } from "./APIResponse.type";

export type ResponseType = {
    kind: string;
    nextPageToken?: string;
    items: Array<Root>;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
};

export interface Root {
    kind: string;
    id: string;
    snippet: Snippet;
}

export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceId;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
}

export interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
    standard: Standard;
    maxres: Maxres;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface Medium {
    url: string;
    width: number;
    height: number;
}

export interface High {
    url: string;
    width: number;
    height: number;
}

export interface Standard {
    url: string;
    width: number;
    height: number;
}

export interface Maxres {
    url: string;
    width: number;
    height: number;
}

export interface ResourceId {
    kind: string;
    videoId: string;
}

export type allData = {
    totalAmount: number;
    list: Array<VideoType>;
    title: string;
};
