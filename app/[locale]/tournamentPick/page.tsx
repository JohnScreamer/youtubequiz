import { getList } from "../../../src/Requests/GetList";
import { TournamentPropsType } from "../../../src/Types/Tournament.type";
import { shuffleArr } from "../../../src/utils/shufle";
import EmptyTab from "../../components/EmptyTab/EmptyTab";
import ErrorComponent from "../../components/uikit/ErrorComponent";
import TournamentPickWrapper from "../../components/ChooseBetween/TournamentPickWrapper";
import Spinner from "../../components/uikit/Spinner/Spinner";

const TournamentPick = async ({
    searchParams: { id, rounds },
}: TournamentPropsType) => {
    if (!id) {
        return <EmptyTab />;
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
                <Spinner />
            )}
        </div>
    );
};

export default TournamentPick;
