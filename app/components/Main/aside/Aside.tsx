import { FC } from "react";
import NewPlaylist from "../NewPlaylist";

type AsideType = {};

const Aside: FC<AsideType> = () => {
    return (
        <aside className="  max-w-full w-full   ">
            <div className="">
                <NewPlaylist />
            </div>
        </aside>
    );
};

export default Aside;
