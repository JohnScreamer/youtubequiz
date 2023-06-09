import GameWrappper from "../components/GuessSong/GameWrappper";
import Spiner from "../components/uikit/Spiner/Spiner";
const getList = async (id: string) => {
    const response = await fetch(`${process.env.URL}/api/getList?id=${id}`, {
        cache: "no-store",
    }).then((data) => data.json());

    return response;
};
const GuessSong = async (props: { searchParams: { id: string } }) => {
    const response = await getList(props.searchParams.id);
    const data = response.playlist;

    return (
        <div className="  py-4 flex  flex-col items-center">
            {data.list ? <GameWrappper VideoList={data} /> : <Spiner />}
        </div>
    );
};

export default GuessSong;
