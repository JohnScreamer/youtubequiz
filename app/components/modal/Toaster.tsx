import { FC } from "react";
import { Toaster as Tost } from "react-hot-toast";
type ToasterType = {};

const Toaster: FC<ToasterType> = () => {
    return <Tost position="bottom-center" reverseOrder={true} />;
};

export default Toaster;
