import { Suspense } from "react";
import Aside from "./components/aside/Aside";
import VideoList from "./components/Main/List/VideoList";
import Search from "./components/Main/Search/Search";
import Spiner from "./components/uikit/Spiner/Spiner";

export default async function Home(props: { searchParams: { title: string } }) {
    return (
        <div className="  h-full flex gap-4  flex-col ">
            <div>
                <Search />
            </div>
            <div className="flex gap-2 grow md:flex-row flex-col">
                <Aside />
                <div className="w-full h-full   grow flex md:mt-0 mt-2 ">
                    <section className=" grow rounded-xl ">
                        <Suspense fallback={<Spiner />}>
                            <VideoList
                                title={props?.searchParams?.title || ""}
                            />
                        </Suspense>
                    </section>
                </div>
            </div>
        </div>
    );
}
