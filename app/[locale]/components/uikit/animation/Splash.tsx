import Image from "next/image";
import { FC, useEffect, useState } from "react";

import flash from "././../../../../public/frogrun.gif";
type SplashType = {};

const Splash: FC<SplashType> = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    if (!visible) {
        return null;
    }
    return (
        <>
            <div
                className={`absolute top-0     bg-inherit  overflow-hidden    w-full h-full `}
            >
                {/* <div className="w-[170px] h-[200px] relative  runFrog animate-[runFrog_2s_ease]">
                    <Image alt="flash" fill={true} src={flash} />
                </div> */}
            </div>
        </>
    );
};

export default Splash;
