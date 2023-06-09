import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Playlist from "./models/PlaylistModel";
import { VideoType } from "@/src/Redux/Slice/common";

type allData = {
    totalAmount: number;
    list: Array<VideoType>;
    title: string;
};

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    const title = searchParams.get("title");
    const { searchParams: findURL } = new URL(url || "");
    const id = findURL.get("list");

    if (!title || !id) {
        return NextResponse.error();
    }
    let requestCount = 50;

    const allData: allData = {
        totalAmount: 0,
        list: [],
        title: title,
    };
    const getAll = async (playlist: ResponseType) => {
        if (!playlist?.nextPageToken) {
            return;
        }
        playlist.pageInfo.totalResults;

        const chunkList = await getDataFromYoutube(id, playlist.nextPageToken);
        if (chunkList?.items) {
            const list = chunkList.items.map((el) => ({
                title: el.snippet.title,
                url: el.snippet.resourceId.videoId,
                img: getImg(el.snippet.thumbnails),
            }));
            allData.list = [...allData.list, ...list];
            await getAll(chunkList);
        }
    };

    const playlist = await getDataFromYoutube(id);
    if (playlist) {
        const list = playlist.items.map((el) => ({
            title: el.snippet.title,
            url: el.snippet.resourceId.videoId,
            img: getImg(el.snippet.thumbnails),
        }));
        allData.list = [...allData.list, ...list];
        await getAll(playlist);
    }
    const data = await setPlaylist(allData);

    return NextResponse.json({ data });
}

const setPlaylist = async (obj: allData) => {
    await mongoose.connect(
        "mongodb+srv://ivuk:ivuk@cluster0.2ctyuog.mongodb.net/?retryWrites=true&w=majority"
    );

    const playlist = new Playlist({
        totalAmount: obj.totalAmount,
        list: obj.list,
        title: obj.title,
    });
    if (!playlist) {
        return NextResponse.error();
    }

    const newPlaylist = await playlist.save();
    return newPlaylist;
};

export const getDataFromYoutube = async (vidId: string, pageToken?: string) => {
    console.log("youtube");

    const str = pageToken ? `&pageToken=${pageToken}` : "";

    const url = `https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=${vidId}&part=snippet&maxResults=50${str}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "2dc2afa31bmsh1c710e8569af426p13ed11jsn5f1b37776b28",
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();

        return JSON.parse(result) as ResponseType;
    } catch (error) {
        return null;
    }
};

type ResponseType = {
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

const getImg = (data: Thumbnails) => {
    return (
        data?.medium?.url ||
        data?.maxres?.url ||
        data?.high?.url ||
        data?.standard?.url ||
        data?.default?.url
    );
};

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
