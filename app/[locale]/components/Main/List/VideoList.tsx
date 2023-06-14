import ListItem from "./listItem";

type VideoListType = {
    title: string;
    data:any;
};

const VideoList: any = async ({title,data}:VideoListType) => {
  

    return (
        <div className=" grid   xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1  gap-2   ">
            {data.map((el) => (
                <ListItem list={el} id={el._id} key={el._id} />
            ))}
        </div>
    );
};

export default VideoList;
