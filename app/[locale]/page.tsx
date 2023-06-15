import { useTranslations } from "next-intl";
import { Suspense } from "react";
import Aside from "./components/aside/Aside";
import Footer from "./components/Footer";
import VideoList from "./components/Main/List/VideoList";
import Search from "./components/Main/Search/Search";
import PaginationWrapper from "./components/uikit/Pagination/Pagination";
import Spiner from "./components/uikit/Spiner/Spiner";
const getAllQuiz = async (title: string, page: string) => {
    const response = await fetch(
        `${process.env.URL}/api/playlist?title=${title}&page=${page}`,
        {
            cache: "no-store",
        }
    ).then((data) => data.json());
    return response;
};

export default async function Home(props: {
    searchParams: { title: string; page: string };
}) {
    // типізувати;
    const data = await getAllQuiz(
        props.searchParams.title || "",
        props.searchParams.page || "0"
    );

    return (
        <div className="  h-full flex gap-4   flex-col  ">
            <div className="flex flex-col md:flex-row-reverse justify-end gap-4 dark:text-[lightPink]">
                <Search />
                <Aside />
            </div>
            <div className="flex gap-2 grow md:flex-row h-full flex-col">
                <div className="w-full min-h-screen flex-col   grow flex md:mt-0 mt-2 ">
                    <div className="flex justify-center py-4 ">
                        <PaginationWrapper totalPage={data?.page} />
                    </div>
                    <section className=" grow rounded-xl mb-auto ">
                        <Suspense fallback={<Spiner />}>
                            <VideoList
                                title={props?.searchParams?.title || ""}
                                data={data.playlist}
                            />
                        </Suspense>
                    </section>
                    <div className="flex justify-center  py-4">
                        <PaginationWrapper totalPage={data?.page} />
                    </div>
                </div>
            </div>
        </div>
    );
}
