import { FC } from "react";

type EqualizerType = {};

const Equalizer: FC<EqualizerType> = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </>
    );
};

export default Equalizer;
