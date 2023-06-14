import { VideoList } from "../../../src/Redux/Slice/common";
import { shuffleArr } from "../../../src/utils/shufle";
import TournamentPickWrapper from "../components/Tournament/TournamentPickWrapper";
import Spiner from "../components/uikit/Spiner/Spiner";
const getList = async (id: string) => {
    const response = await fetch(`${process.env.URL}/api/getList?id=${id}`, {
        cache: "no-store",
    }).then((data) => data.json());

    return response;
};
const TournamentPick = async ({
    searchParams: { id, rounds },
}: {
    searchParams: { id: string; rounds: string };
}) => {
    if (!id) {
        return <div>no id</div>;
    }
    const response = await getList(id);
    const playlist = response.playlist as VideoList;
    const data: VideoList = {
        ...playlist,
        list: shuffleArr(playlist.list).splice(0, +rounds || 8),
    };

    return (
        <div className="  py-4 flex  flex-col items-center">
            {data.list ? (
                <TournamentPickWrapper videoList={data} />
            ) : (
                <Spiner />
            )}
        </div>
    );
};

export default TournamentPick;
