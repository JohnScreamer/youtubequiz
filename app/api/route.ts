import { NextResponse } from "next/server";
import { VideoType } from "../../src/Types/APIResponse.type";
import { allData, ResponseType } from "../../src/Types/BackApi.type";
import { setPlaylist } from "../../src/Requests/mongo/setPlaylist";
import {
    getDataFromYoutube,
    getImg,
} from "../../src/Requests/GetFromYoutubeData";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    const title = searchParams.get("title");
    const { searchParams: findURL } = new URL(url || "");
    const id = findURL.get("list");

    if (!title || !id) {
        return NextResponse.error();
    }

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
            allData.list = [...allData.list, ...(list as VideoType[])];
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
        allData.list = [...allData.list, ...(list as VideoType[])];
        await getAll(playlist);
    }
    const data = await setPlaylist(allData);

    return NextResponse.json({ data });
}
