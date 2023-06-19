import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import DefBtn from "../uikit/btn/DefBtn";
import glitch from "./../../../public/glitch.gif";
type EmptyTabType = {};

const EmptyTab: FC<EmptyTabType> = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="dark:staticNeonTextRed pixel text-3xl font-bold mb-6">
                No content
            </h1>
            <div className="relative mb-4 w-[280px] h-[175px] upStyle rounded-xl dark:neonBar overflow-hidden">
                <Image alt="mo content logo" src={glitch} fill={true} />
            </div>
            <Link href={"/"}>
                <DefBtn circle={true}>Go to Home</DefBtn>
            </Link>
        </div>
    );
};

export default EmptyTab;
