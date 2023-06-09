import Image from "next/image";
import { FC } from "react";
import fish from "./../../../../public/fish.gif";
type LoadingFishType = {};

const LoadingFish: FC<LoadingFishType> = () => {
    return (
        <>
            <div className={`${"fixed  top-[50%] left-[50%]"} `}>
                <Image width={700} height={700} src={fish} alt="fish" />
                dsadsdasdasdasdasdasdsadasdasdasdasdasdasdasdasdadadasd
            </div>
        </>
    );
};

export default LoadingFish;
