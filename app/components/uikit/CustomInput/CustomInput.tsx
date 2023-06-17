import { FC, InputHTMLAttributes } from "react";

type CustomInputType = InputHTMLAttributes<HTMLInputElement> & {
    sx?: string;
};

const CustomInput: FC<CustomInputType> = (props) => {
    const { className, sx, ...restProps } = props;
    return (
        <input
            className={`bg-transparent w-full border-b hover:border-b-white  border-b-indigo-100 p-4   text-2xl  rounded-xl   
                        shadow-[inset_1px_3px_4px_black]  focus:shadow-[inset_5px_10px_10px_black] 
                         hover:shadow-[inset_5px_10px_10px_black] duration-300 ${sx}`}
            {...restProps}
        />
    );
};

export default CustomInput;
