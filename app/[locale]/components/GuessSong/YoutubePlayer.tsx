import Image from "next/image";
import { FC, useEffect, useState } from "react";
import YouTube from "react-youtube";
import { OPTSPreview } from "../../../../src/constats/youtubeConfig";
import Spiner from "../uikit/Spiner/Spiner";

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
            <div className=" overflow-hidden upStyleNoAnim ">
                <YouTube
                    videoId={videoId}
                    opts={OPTSPreview}
                    onReady={setIsReady}
                    ref={innerRef}
                />
            </div>

            {isPlayerReady ? null : (
                <div className="absolute top-[50%] right-[50%] inline-block translate-x-[50%] translate-y-[-50%] ">
                    <Spiner posNo />
                </div>
            )}
        </div>
    );
};

export default YoutubePlayer;
