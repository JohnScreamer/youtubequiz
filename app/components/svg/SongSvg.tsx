import { FC } from "react";

type SongSvgType = {};

const SongSvg: FC<SongSvgType> = () => {
    return (
        <>
            <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m19 9.308-9 1.384V18c0 2-2.067 3-4 3-1.933 0-4-1-4-3s2.067-3 4-3c.682 0 1.381.125 2 .374V6.287c0-.74.54-1.37 1.272-1.483l10.576-1.627A1 1 0 0 1 21 4.166V16c0 2-2.067 3-4 3-1.933 0-4-1-4-3s2.067-3 4-3c.682 0 1.381.125 2 .374V9.308zm0-2v-2l-9 1.384v2l9-1.384zM8 18c0-1-2-1-2-1s-2 0-2 1 2 1 2 1 2 0 2-1zm11-2c0-1-2-1-2-1s-2 0-2 1 2 1 2 1 2 0 2-1z"
                    className=" dark:fill-lightPink fill-black"
                />
            </svg>
        </>
    );
};

export default SongSvg;
