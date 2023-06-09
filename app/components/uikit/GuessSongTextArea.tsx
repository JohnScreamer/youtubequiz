import { TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { useSimilarity } from "../../../src/hooks/useSimilarity";
import CustomTextArea from "./CustomTextArea/CustomTextArea";

type GuessSongTextAreaType = {
    title?: string;
    nextSong: () => void;
    isDisabled:boolean;
};

const GuessSongTextArea: FC<GuessSongTextAreaType> = ({
    title = "",
    nextSong,
    isDisabled
}) => {
    // const str = title?.replace("(Official Video)", "");
    const { setText, value } = useSimilarity({ title, nextSong });
    return (
        <div className=" mt-4">
            <h2>Write here name and author of song</h2>
            <CustomTextArea value={value} onChange={setText} disabled={isDisabled} />
        </div>
    );
};

export default GuessSongTextArea;
