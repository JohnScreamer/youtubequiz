import { getAllQuiz } from "../../src/Requests/GetAllQuiz";
import { HomeProps } from "../../src/Types/Home.type";
import Content from "../components/Main/Content/Content";
import SubHeader from "../components/Main/SubHeader/SubHeader";

export default async function Home({
    searchParams: { page, title },
}: HomeProps) {
    const data = await getAllQuiz(title || "", page || "0");

    return (
        <div className="  h-full flex gap-4   flex-col  ">
            <SubHeader />
            <Content data={data} title={title} />
        </div>
    );
}
