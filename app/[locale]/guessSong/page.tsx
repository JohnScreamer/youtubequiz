import { getList } from "../../../src/Requests/GetList";
import { GuessSongType } from "../../../src/Types/GuessSong.type";
import ErrorComponent from "../../components/uikit/ErrorComponent";
import GameWrappper from "../../components/GuessSong/GameWrappper";
import Spiner from "../../components/uikit/Spiner/Spiner";

const GuessSong = async ({ searchParams: { id } }: GuessSongType) => {
    const response = await getList(id);
    if ("error" in response) {
        return <ErrorComponent />;
    }

    return (
        <div className="  py-4 flex  flex-col items-center">
            {response.list ? <GameWrappper VideoList={response} /> : <Spiner />}
        </div>
    );
};

export default GuessSong;
