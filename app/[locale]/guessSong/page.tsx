import { getList } from "../../../src/Requests/GetList";
import { GuessSongType } from "../../../src/Types/GuessSong.type";
import ErrorComponent from "../../components/uikit/ErrorComponent";
import GameWrapper from "../../components/GuessSong/GameWrapper";
import Spinner from "../../components/uikit/Spinner/Spinner";

const GuessSong = async ({ searchParams: { id } }: GuessSongType) => {
    const response = await getList(id);
    if ("error" in response) {
        return <ErrorComponent />;
    }

    return (
        <div className="  py-4 flex  flex-col items-center">
            {response.list ? <GameWrapper VideoList={response} /> : <Spinner />}
        </div>
    );
};

export default GuessSong;
