import { getList } from "../../../src/Requests/GetList";
import { KingPropsType } from "../../../src/Types/King.type";
import { shuffleArr } from "../../../src/utils/shufle";
import ErrorComponent from "../../components/ErrorComponent";
import KingOfTheMountainWrapper from "../../components/KingOfTheMountain/KingOfTheMountainWrapper";

const King = async ({ searchParams: { id } }: KingPropsType) => {
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
        list: shuffleArr(playlist.list),
    };
    return (
        <div>
            <KingOfTheMountainWrapper data={data} />
        </div>
    );
};

export default King;
