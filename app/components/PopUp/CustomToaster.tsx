import { FC, HTMLAttributes, ReactNode } from "react";
import toast from "react-hot-toast";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from "@mui/icons-material/Done";
import DefBtn from "../uikit/btn/DefBtn";

type CustomToasterType = HTMLAttributes<HTMLDivElement> & {
    t: any;
    variant: "error" | "success";
};

const icon = {
    error: <ErrorIcon />,
    success: <DoneIcon />,
};
const colorStyle = {
    error: "bg-red-600/70 ",
    success: "bg-green-500/70",
};

const CustomToaster: FC<CustomToasterType> = (props) => {
    const { children, variant, className, t, ...restProps } = props;
    const color = variant ? colorStyle[variant] : "";
    return (
        <>
            <div
                className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                } ${color} flex gap-2 downStyle `}
            >
                <div
                    className={` gap-2  flex justify-center items-center `}
                    {...restProps}
                >
                    {icon[variant]}
                    <div>{children}</div>
                </div>

                <div className="flex p-2">
                    <DefBtn
                        onClick={() => toast.dismiss(t.id)}
                        variant={variant}
                    >
                        Close
                    </DefBtn>
                </div>
            </div>
        </>
    );
};

export default CustomToaster;
