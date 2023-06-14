import { VideoList } from "../../../src/Redux/Slice/common";
import { shuffleArr } from "../../../src/utils/shufle";
import KingOfTheMountainWrapper from "../components/KingOfTheMountain/KingOfTheMountainWrapper";

const getList = async (id: string) => {
    const response = await fetch(`${process.env.URL}/api/getList?id=${id}`, {
        cache: "no-store",
    }).then((data) => data.json());

    return response;
};

const King = async ({
    searchParams: { id },
}: {
    searchParams: { id: string };
}) => {
    if (!id) {
        return <div>no id</div>;
    }
    const response = await getList(id);
    const playlist = response.playlist as VideoList;
    const data: VideoList = {
        ...playlist,
        list: shuffleArr(playlist.list),
    };
    return (
        <div>
            <KingOfTheMountainWrapper data={data} />
        </div>
    );
};

export default King;
