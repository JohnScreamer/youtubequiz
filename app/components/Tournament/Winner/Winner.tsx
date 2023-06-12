import Image from "next/image";
import { FC } from "react";
import bg from "./../../../../public/UQSQcP1heLKO.gif";
import crown from "./../../../../public/crown.gif";

type WinnerType = {
    winnerName: string;
};

const Winner: FC<WinnerType> = ({ winnerName }) => {
    return (
        <div className="animate-[scaleAnim_0.5s_ease-in-out] mt-[10%] flex  items-center flex-col gap-4 ">
            <div className="w-full flex justify-center">
                <Image alt="winner logo" src={crown} height={100} width={200} />
            </div>
            <h2 className="text-3xl pixel font-bold ">Winner!!!</h2>

            <h3 className="text-xl  font-bold ">{winnerName}</h3>
            <div className="p-4 upStyleNoAnim text-2xl w-[300px] relative h-[300px] overflow-hidden  text-center">
                <Image src={bg} fill={true} alt="bg" className="z-0 relative" />
            </div>
        </div>
    );
};

export default Winner;
