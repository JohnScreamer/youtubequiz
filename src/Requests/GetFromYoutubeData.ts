import { ResponseType, Thumbnails } from "../Types/BackApi.type";

export const getImg = (data: Thumbnails) => {
    return (
        data?.medium?.url ||
        data?.maxres?.url ||
        data?.high?.url ||
        data?.standard?.url ||
        data?.default?.url
    );
};

export const getDataFromYoutube = async (vidId: string, pageToken?: string) => {
    ("youtube");

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
