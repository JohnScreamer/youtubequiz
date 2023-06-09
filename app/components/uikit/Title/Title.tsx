import { FC, HTMLAttributes } from "react";

type TitleType = HTMLAttributes<HTMLHeadingElement> & {
    sx?: string;
    children: string;
};

const Title: FC<TitleType> = (props) => {
    const { className, children, sx, ...restProps } = props;
    return (
        <h3
            {...restProps}
            className={` text-3xl w-full text-center   font-bold  downStyle   ${sx} `}
        >
            {children}
        </h3>
    );
};

export default Title;
