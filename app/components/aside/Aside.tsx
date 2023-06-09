import { FC } from "react";
import NewPlaylist from "../Main/NewPlaylist";

type AsideType = {};

const Aside: FC<AsideType> = () => {
    return (
        <aside className=" md:max-w-[250px] max-w-full w-full   ">
            <div className="">
                <NewPlaylist />
            </div>
        </aside>
    );
};

export default Aside;
