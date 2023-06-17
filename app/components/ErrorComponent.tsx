import Link from "next/link";
import { FC } from "react";
import DefBtn from "./uikit/btn/DefBtn";

type ErrorComponentType = {};

const ErrorComponent: FC<ErrorComponentType> = () => {
    return (
        <div className="flex justify-center items-center">
            <h2>Something went wrong!</h2>
            <Link href={"/"}>
                <DefBtn>Main</DefBtn>
            </Link>
        </div>
    );
};

export default ErrorComponent;
