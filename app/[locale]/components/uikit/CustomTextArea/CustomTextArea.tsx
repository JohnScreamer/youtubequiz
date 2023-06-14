import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type CustomTextAreaType = TextareaHTMLAttributes<HTMLTextAreaElement> & {};

const CustomTextArea: FC<CustomTextAreaType> = (props) => {
    return (
        <textarea
            rows={4}
            cols={50}
            {...props}
            className="bg-transparent w-full border-b hover:border-b-white  disabled:bg-slate-500/30 border-b-indigo-100 p-4   text-2xl  rounded-xl   
            shadow-[inset_1px_3px_4px_black]  focus:shadow-[inset_5px_10px_10px_black] 
            hover:shadow-[inset_5px_10px_10px_black] duration-300"
        ></textarea>
    );
};

export default CustomTextArea;
