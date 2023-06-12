import { FC, useRef, useState } from "react";
import QuestionMark from "../svg/QuestionMark";
import DefBtn from "../uikit/btn/DefBtn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HelpIcon from "@mui/icons-material/Help";
import { usePlayer } from "../../../src/hooks/usePlayer";
import YoutubePlayer from "./YoutubePlayer";

type QuestionSectionType = {
    videoId: string;
};

const QuestionSection: FC<QuestionSectionType> = ({ videoId }) => {
    const PlayerRef = useRef(null);
    const { pauseVideo } = usePlayer({ ref: PlayerRef });

    const [isPlayerVisible, setVisibleStatus] = useState(false);
    const togglePlayerStatus = () => {
        if (!isPlayerVisible) {
            pauseVideo();
        }
        setVisibleStatus((prev) => !prev);
    };

    return (
        <div className="">
            <div className="absolute top-[-60px] right-0 z-10 ">
                {isPlayerVisible ? (
                    <DefBtn
                        onClick={togglePlayerStatus}
                        circle
                        title="close youtube player"
                    >
                        <HelpIcon />
                    </DefBtn>
                ) : (
                    <DefBtn
                        onClick={togglePlayerStatus}
                        circle
                        title="open youtube player"
                    >
                        <YouTubeIcon />
                    </DefBtn>
                )}
            </div>
            <>
                {isPlayerVisible ? (
                    <YoutubePlayer innerRef={PlayerRef} videoId={videoId} />
                ) : (
                    <QuestionMark />
                )}
            </>
        </div>
    );
};

export default QuestionSection;
