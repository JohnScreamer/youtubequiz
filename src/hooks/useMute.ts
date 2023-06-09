import { MutableRefObject, useEffect } from "react";
import { usePlayer, YoutubeType } from "./usePlayer";
type MuteType = {
    ref: MutableRefObject<null> | MutableRefObject<YoutubeType>;
    divRef: MutableRefObject<HTMLDivElement> | MutableRefObject<null>;
};
export const useMute = ({ ref, divRef }: MuteType) => {
    const { unMuteVideo, muteVideo } = usePlayer({ ref });
    useEffect(() => {
        if (!divRef.current) {
            return;
        }
        divRef.current.addEventListener("mouseenter", () => {
            unMuteVideo();
        });
        divRef.current.addEventListener("mouseleave", () => {
            muteVideo();
        });

        return () => {
            if (!divRef.current) {
                return;
            }
            divRef.current.removeEventListener("mouseenter", () => {
                unMuteVideo();
            });
            divRef.current.removeEventListener("mouseleave", () => {
                muteVideo();
            });
        };
    }, []);
};
