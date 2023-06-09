import ListItem from "./listItem";

type VideoListType = {};
const getAllQuiz = async (title: string) => {
    const response = await fetch(
        `${process.env.URL}/api/playlist?title=${title}`,
        {
            cache: "no-store",
        }
    ).then((data) => data.json());
    return response.playlist;
};

const VideoList: any = async (props: { title: string }) => {
    const data = await getAllQuiz(props.title || "");

    return (
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-2   ">
            {data.map((el) => (
                <ListItem list={el} id={el._id} key={el._id} />
            ))}
        </div>
    );
};

export default VideoList;
