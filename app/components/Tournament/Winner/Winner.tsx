import Image from "next/image";
import { FC } from "react";
import bg from "./../../../../public/UQSQcP1heLKO.gif";

type WinnerType = {
    winnerName: string;
};

const Winner: FC<WinnerType> = ({ winnerName }) => {
    return (
        <div className=" min-h-screen">
            <div className="animate-[scaleAnim_0.5s_ease-in-out] mt-[30%] flex  items-center flex-col gap-4 ">
                <h2 className="text-3xl pixel font-bold ">Winner!!!</h2>
                <h3 className="text-xl  font-bold ">{winnerName}</h3>
                <div className="p-4 upStyleNoAnim text-2xl w-[300px] relative h-[300px] overflow-hidden  text-center">
                    <Image
                        src={bg}
                        fill={true}
                        alt="bg"
                        className="z-0 relative"
                    />
                </div>
            </div>
        </div>
    );
};

export default Winner;
