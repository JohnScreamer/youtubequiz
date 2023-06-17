import { getList } from "../../../src/Requests/GetList";
import { TournamentPropsType } from "../../../src/Types/Tournament.type";
import { shuffleArr } from "../../../src/utils/shufle";
import ErrorComponent from "../../components/ErrorComponent";
import TournamentPickWrapper from "../../components/Tournament/TournamentPickWrapper";
import Spiner from "../../components/uikit/Spiner/Spiner";

const TournamentPick = async ({
    searchParams: { id, rounds },
}: TournamentPropsType) => {
    if (!id) {
        return <div>no id</div>;
    }

    const response = await getList(id);

    if ("error" in response) {
        return <ErrorComponent />;
    }

    const playlist = response;
    const data = {
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
