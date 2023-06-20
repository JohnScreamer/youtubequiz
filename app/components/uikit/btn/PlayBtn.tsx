import Image from "next/image";
import { ButtonHTMLAttributes, FC } from "react";
import playbtn from "./../../../../public/playneon.jpg";
type PlayBtnType = ButtonHTMLAttributes<HTMLButtonElement> & {};

const PlayBtn: FC<PlayBtnType> = (props) => {
    const { className, ...restProps } = props;
    return (
        <button
            className={`group hover:shadow-[inset_10px_15px_20px_black]   active:shadow-[inset_15px_30px_30px_black]  shadow-[inset_5px_10px_10px_black] focus:shadow-[inset_10px_15px_20px_black] 
            border-t   hover:border-t-transparent      border-b-transparent border-t-indigo-100    border-b  hover:border-b-indigo-100
            duration-300   p-[7px]  ${className}  inline-flex justify-center rounded-full  m-x-auto`}
            {...restProps}
        >
            <div className="w-[175px] h-[175px]  rounded-full flex justify-center items-center border-[5px] border-black dark:border-0 dark:neonBarPlay ">
                <div
                    className=" border-t-[37px] border-t-transparent
                                border-l-[70px]  dark:border-l-[#bc13fe] border-l-black
                                 border-b-[37px] border-b-transparent
                                relative left-2
                                 dark:dropFilter
    
    
    "
                ></div>
            </div>
        </button>
    );
};

export default PlayBtn;
