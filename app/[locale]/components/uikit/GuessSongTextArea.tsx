import { useTranslations } from "next-intl";
import { FC } from "react";
import { useSimilarity } from "../../../../src/hooks/useSimilarity";
import { shortTitle } from "../../../../src/utils/shortTitle";
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
    const t = useTranslations("Index");
    return (
        <div className=" mt-4">
            <h2 className="dark:text-lightPink">{t("writeNameTitle")}</h2>
            <CustomTextArea
                value={value}
                onChange={setText}
                disabled={isDisabled}
            />
            <div className="text-end  dark:text-lightPink">
                {t("letters")}:
                {shortTitle(title).length - shortTitle(value).length}
            </div>
        </div>
    );
};

export default GuessSongTextArea;
