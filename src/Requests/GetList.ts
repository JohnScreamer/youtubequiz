import { DEFAULT_ERROR_OBJ } from "../constats/DefaultErrorObj";
import { GetListType } from "../Types/Tournament.type";

export const getList: GetListType = async (id) => {
    const response = await fetch(`${process.env.URL}/api/getList?id=${id}`, {
        cache: "no-store",
    })
        .then((data) => data.json())
        .then((data) => {
            if (!data?.list) {
                return DEFAULT_ERROR_OBJ();
            }
            return data;
        })
        .catch((e) => {
            return DEFAULT_ERROR_OBJ(e);
        });

    return response;
};
