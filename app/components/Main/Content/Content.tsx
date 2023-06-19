import { FC, Suspense } from "react";
import {
    CustomErrorType,
    GetPlaylistResponseType,
} from "../../../../src/Types/APIResponse.type";
import ErrorComponent from "../../uikit/ErrorComponent";
import PaginationWrapper from "../../uikit/Pagination/Pagination";
import Spiner from "../../uikit/Spiner/Spiner";
import VideoList from "../List/VideoList";

type ContentType = {
    data: GetPlaylistResponseType | CustomErrorType;
    title?: string;
};

const Content: FC<ContentType> = ({ data, title }) => {
    if ("error" in data) {
        return <ErrorComponent />;
    }
    return (
        <>
            <div className="flex gap-2 grow md:flex-row h-full flex-col">
                <div className="w-full min-h-screen flex-col   grow flex md:mt-0 mt-2 ">
                    <div className="flex justify-center py-4 ">
                        <PaginationWrapper totalPage={data?.page} />
                    </div>
                    <section className=" grow rounded-xl mb-auto ">
                        <Suspense fallback={<Spiner />}>
                            <VideoList
                                title={title || ""}
                                data={data.playlist}
                            />
                        </Suspense>
                    </section>
                    <div className="flex justify-center  py-4">
                        <PaginationWrapper totalPage={data?.page} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
