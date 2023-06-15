import Content from "./components/Main/Content/Content";
import SubHeader from "./components/Main/SubHeader/SubHeader";

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
            <SubHeader />
            <Content data={data} title={props.searchParams.title} />
        </div>
    );
}
