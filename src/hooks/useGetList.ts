import { useSearchParams } from "next/navigation";
import { VideoList } from "../Redux/Slice/common";
import { useAppSelector } from "./reduxHooks";

export const useGetList = () => {
    const rout = useSearchParams();

    const listName = rout.get("list");
    const list = useAppSelector((state) => state.common.allVideoList);
    const currentList = list.filter((el) => el.title === listName);
    const data: VideoList | null = currentList.length
        ? { ...currentList[0] }
        : null;
    return { list: data };
};
