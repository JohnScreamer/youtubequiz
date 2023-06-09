import { ChangeEvent, useEffect, useState } from "react";
import stringSimilarity from "string-similarity";
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
        let str1 = title
            .replace("(Official Video)", "")
            .replace(regex, "")
            .toLowerCase();
        let str2 = str.replace(regex, "").toLowerCase();

        const similarity = stringSimilarity.compareTwoStrings(str1, str2);
        if (similarity > 0.7) {
            console.log("YESS", similarity);
            nextSong(10);
        }
    };
    const setText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        if (value.length > 5) Similarity(e.target.value);
    };

    return { setText, value };
};
