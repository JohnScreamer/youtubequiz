import Image from "next/image";
import { FC } from "react";
import runFrog from "./../../../../public/frogrun.gif";
type SpinnerType = {
    sx?: string;
    posNo?: boolean;
};

const Spinner: FC<SpinnerType> = ({ sx, posNo }) => {
    return (
        <>
            <div
                className={`${
                    posNo ? "" : "fixed top-[50%] left-[50%] z-40"
                } ${sx}`}
            >
                <Image alt="spinner" src={runFrog} width={100} height={100} />
            </div>
        </>
    );
};

export default Spinner;
