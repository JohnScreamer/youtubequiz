import { useTranslations } from "next-intl";
import { FC,  useRef } from "react";
import YouTube from "react-youtube";
import { useMute } from "../../../src/hooks/useMute";
import { useYoutubeOptions } from "../../../src/hooks/useYoutubeOptions";
import { VideoType } from "../../../src/Types/APIResponse.type";
import Splash from "../uikit/animation/Splash";
import DefBtn from "../uikit/btn/DefBtn";

type TournamentCardType = {
    videoData: VideoType;
    pickVideo: (id: string) => void;
};

const TournamentCard: FC<TournamentCardType> = ({ videoData, pickVideo }) => {
    const ref = useRef<YouTube>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const OPTS2 = useYoutubeOptions();
    useMute({ ref, divRef });
    const pick = () => {
        pickVideo(videoData._id);
    };
    const t = useTranslations("Index");
    return (
        <div
            className="w-full   md:min-h-screen min-h-full    flex items-center flex-col"
            ref={divRef}
        >
            <div
                className={` flex flex-col items-center w-full bg-red    gap-4`}
            >
                <h2 className=" text-xl w-full text-center md:hidden  font-bold  ">
                    {videoData.title}
                </h2>
                <div
                    className="p-1 upStyleNoAnim dark:upStyleNoAnimDark relative overflow-hidden flex justify-center items-center "
                    style={{
                        width: OPTS2.width + "px",
                        height: OPTS2.height + "px",
                    }}
                >
                    <div className="rounded-xl overflow-hidden  ">
                        <YouTube
                            videoId={videoData.url}
                            opts={OPTS2}
                            ref={ref}
                        />
                    </div>
                    <Splash />
                </div>
                <DefBtn variant="success" onClick={pick}>
                    {t("vote")}
                </DefBtn>
            </div>
        </div>
    );
};

export default TournamentCard;
