import { FC, useEffect, useState } from "react";
import YouTube from "react-youtube";
import { OPTSPreview } from "../../../src/constats/youtubeConfig";
import Spinner from "../uikit/Spinner/Spinner";

type YoutubePlayerType = {
    videoId: string;
    innerRef: any;
};

const YoutubePlayer: FC<YoutubePlayerType> = ({ videoId, innerRef }) => {
    const [isPlayerReady, setPlayerStatus] = useState(false);

    const setIsReady = () => {
        setPlayerStatus(true);
    };

    return (
        <div className="relative">
            <div className=" overflow-hidden upStyleNoAnim dark:upStyleNoAnimDark">
                <YouTube
                    videoId={videoId}
                    opts={OPTSPreview}
                    onReady={setIsReady}
                    ref={innerRef}
                />
            </div>

            {isPlayerReady ? null : (
                <div className="absolute top-[50%] right-[50%] inline-block translate-x-[50%] translate-y-[-50%] ">
                    <Spinner posNo />
                </div>
            )}
        </div>
    );
};

export default YoutubePlayer;
