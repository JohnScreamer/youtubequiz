import { ChangeEvent, useEffect, useState } from "react";
import stringSimilarity from "string-similarity";
import { SETTINGS } from "../constats/GameSettings";
import { shortTitle } from "../utils/shortTitle";
type Similarity = {
    title: string;
    nextSong: (num: number) => void;
};

export const useSimilarity = ({ title, nextSong }: Similarity) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        setValue("");
    }, [title]);
    const Similarity = (str: string) => {
        let regex = /[^A-Za-z0-9ЁёА-я]/g;
        let str1 = shortTitle(title);
        let str2 = str.replace(regex, "").toLowerCase();

        const similarity = stringSimilarity.compareTwoStrings(str1, str2);
        if (similarity > SETTINGS.GUESS_SONG.STR_SIMILARITY_PERCENT) {
            nextSong(SETTINGS.GUESS_SONG.START_POINT_FOR_SONG);
        }
    };
    const setText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);

        if (value.length > 5) Similarity(e.target.value);
    };

    return { setText, value };
};
