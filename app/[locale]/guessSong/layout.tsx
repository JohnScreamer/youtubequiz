import { FC } from "react";
type layoutType = {};

const layout: FC<layoutType> = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <div>{children}</div>
        </>
    );
};

export default layout;
