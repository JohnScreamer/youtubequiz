import { FC } from "react";
import { useSimilarity } from "../../../src/hooks/useSimilarity";
import { shortTitle } from "../../../src/utils/shortTitle";
import CustomTextArea from "./CustomTextArea/CustomTextArea";

type GuessSongTextAreaType = {
    title?: string;
    nextSong: () => void;
    isDisabled: boolean;
};

const GuessSongTextArea: FC<GuessSongTextAreaType> = ({
    title = "",
    nextSong,
    isDisabled,
}) => {
    const { setText, value } = useSimilarity({ title, nextSong });
    console.log(title);
    return (
        <div className=" mt-4">
            <h2>Write here name and author of song</h2>
            <CustomTextArea
                value={value}
                onChange={setText}
                disabled={isDisabled}
            />
            <div className="text-end ">
                {" "}
                Letters:{shortTitle(title).length - shortTitle(value).length}
            </div>
        </div>
    );
};

export default GuessSongTextArea;
