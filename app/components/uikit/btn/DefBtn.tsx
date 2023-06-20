import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type DefBtnType = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Style variant
     */
    variant?: "error" | "success";
    /**
     * Add icon to left
     */
    leftIcon?: ReactNode;
    /**
     * Add icon to right
     */
    rightIcon?: ReactNode;
    /**
     * extra style
     */
    sx?: string;
    /**
     * is Border 100%
     */
    circle?: boolean | undefined;
};
const colorStyle = {
    error: "hover:bg-red-600/30 bg-red-600/8 ",
    success: "hover:bg-green-500/30 bg-green-500/8 ",
    default: "hover:bg-blue-500/30 bg-blue-500/8 ",
};

const DefBtn: FC<DefBtnType> = (props) => {
    const {
        children,
        className,
        variant,
        rightIcon,
        leftIcon,
        sx,
        circle,
        ...restProp
    } = props;
    const color = variant ? colorStyle[variant] : colorStyle.default;
    return (
        <button
            className={`w-full   group enabled:hover:shadow-[inset_1px_3px_4px_black] disabled:bg-slate-500/30   upStyle  duration-300 ${color} rounded-full p-2  ${
                circle ? "" : "py-4"
            }   ${sx}  `}
            {...restProp}
        >
            <div className=" enabled:group-hover:scale-95   enabled:group-focus:scale-95  enabled:group-active:scale-90  duration-200 flex justify-center items-center gap-[5px]">
                {leftIcon}
                {children}
                {rightIcon}
            </div>
        </button>
    );
};

export default DefBtn;
