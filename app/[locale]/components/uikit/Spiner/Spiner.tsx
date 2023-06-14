import Image from "next/image";
import { FC } from "react";
import runcat from "./../../../../../public/frogrun.gif";
type SpinerType = {
    sx?: string;
    posNo?: boolean;
};

const Spiner: FC<SpinerType> = ({ sx, posNo }) => {
    return (
        <>
            <div
                className={`${
                    posNo ? "" : "fixed top-[50%] left-[50%] z-40"
                } ${sx}`}
            >
                <Image alt="spinner" src={runcat} width={100} height={100} />
            </div>
        </>
    );
};

export default Spiner;
