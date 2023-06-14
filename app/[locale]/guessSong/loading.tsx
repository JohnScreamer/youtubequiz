import { FC } from "react";
import Spiner from "../components/uikit/Spiner/Spiner";

type LoadingType = {};

const Loading: FC<LoadingType> = () => {
    return <Spiner />;
};

export default Loading;
