import Image from "next/image";
import { FC } from "react";
import Counter from "./Counter";
import Equalizer from "./Equalizer";
import Play from "./Play";
import QuestionSection from "./QuestionSection";
import guy from "./../../../public/VgO.gif";
import rick from "./../../../public/rick-sanchez-dancing-transparent-sticker-r51qoyn3sgxqo1tu.gif";

type PlayBtnAreaType = {
    isPlayed: false | number;
    play: () => void;
    isPlayBtnVisible: boolean;
    isSongReady: boolean;
    videoId: string;
};

const PlayBtnArea: FC<PlayBtnAreaType> = ({
    isPlayed,
    isPlayBtnVisible,
    play,
    isSongReady,
    videoId,
}) => {
    return (
        <div className="flex item-center justify-center relative w-full">
            {isPlayed ? (
                <>
                    <div className="flex flex-col gap-8 w-full  min-h-[250px] ">
                        <Counter startNum={isPlayed} />
                        <div className="mt-auto">
                            <Equalizer />
                        </div>
                        <div className="absolute left-[-18px] bottom-[-112px]">
                            <Image
                                src={rick}
                                alt="dance img"
                                width={220}
                                height={200}
                            />
                        </div>
                        <div className="absolute right-[-25px] bottom-[-136px]">
                            <Image
                                src={guy}
                                alt="dance img"
                                width={320}
                                height={250}
                            />
                        </div>
                    </div>
                </>
            ) : !isPlayBtnVisible ? (
                <Play isSongReady={isSongReady} play={play} />
            ) : (
                <QuestionSection videoId={videoId} />
            )}
        </div>
    );
};

export default PlayBtnArea;
