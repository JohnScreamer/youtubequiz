import { FC } from "react";
import Spinner from "../../components/uikit/Spinner/Spinner";

type LoadingType = {};

const Loading: FC<LoadingType> = () => {
    return <Spinner />;
};

export default Loading;
