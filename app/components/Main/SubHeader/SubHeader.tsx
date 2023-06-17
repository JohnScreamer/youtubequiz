import { FC } from "react";
import Aside from "../../aside/Aside";
import Search from "../Search/Search";

type SubHeaderType = {};

const SubHeader: FC<SubHeaderType> = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row-reverse justify-end gap-4 dark:text-[lightPink]">
                <Search />
                <Aside />
            </div>
        </>
    );
};

export default SubHeader;
