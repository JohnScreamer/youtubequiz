import { FC, HTMLAttributes } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";
type PopUpType = HTMLAttributes<HTMLDivElement> & {
    variant: "error" | "success" | "info";
};
const icon = {
    error: <ErrorIcon />,
    success: <DoneIcon />,
    info: "",
};
const colorStyle = {
    error: "bg-red-600/50 ",
    success: "bg-green-500/50",
    info: "",
};

const PopUp: FC<PopUpType> = (props) => {
    const { children, variant, className, ...restProps } = props;
    const color = variant ? colorStyle[variant] : colorStyle.info;
    return (
        <div
            className={`fixed bottom-4 right-4 p-2 ${color} flex gap-2 justify-center items-center `}
            {...restProps}
        >
            {icon[variant]}
            <div>{children}</div>
        </div>
    );
};

export default PopUp;
