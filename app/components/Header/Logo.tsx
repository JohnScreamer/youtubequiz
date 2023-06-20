import { FC } from "react";

type LogoType = {};

const Logo: FC<LogoType> = () => {
    return (
        <>
            <div className=" md:text-2xl text-sm  hidden dark:flex justify-center items-center    logo  p-2 px-8 pixel ">
                <b>
                    Qu<span>i</span>z g<span>a</span>me
                </b>
            </div>
            <div className="flex text-2xl dark:hidden  break-keep font-extrabold gap-2 relative z-2 text-center dark:neonText p-2 px-8 pixel <b>d<span>ri</span>bb<span>b</span>le</b>">
                Quiz game
            </div>
        </>
    );
};

export default Logo;
