import { FC, HTMLAttributes, useState } from "react";
import DefBtn from "../uikit/btn/DefBtn";

type ModalContainerType = HTMLAttributes<HTMLDivElement> & {};

const ModalContainer: FC<ModalContainerType> = (props) => {
    const { children, className, ...restProps } = props;
    const [isVisible, setStatus] = useState(true);
    return (
        <div {...restProps} className="fixed">
            {isVisible ? <DefBtn>Add playlist</DefBtn> : <div>{children}</div>}
        </div>
    );
};

export default ModalContainer;
