import { FC } from "react";

type EqualizerType = {};

const Equalizer: FC<EqualizerType> = () => {
    return (
        <>
            <div>
                <div className="container ">
                    <div className="bar dark:neonBar"></div>
                    <div className="bar dark:neonBar"></div>
                    <div className="bar dark:neonBar"></div>
                    <div className="bar dark:neonBar"></div>
                    <div className="bar dark:neonBar"></div>
                </div>
            </div>
        </>
    );
};

export default Equalizer;
