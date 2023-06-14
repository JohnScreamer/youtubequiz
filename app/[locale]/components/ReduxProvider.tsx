"use client";

import { Children, FC, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../../../src/Redux/store";

type ReduxProviderType = {
    children: ReactNode;
};

const ReduxProvider: FC<ReduxProviderType> = ({ children }) => {
    
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
