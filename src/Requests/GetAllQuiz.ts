import { DEFAULT_ERROR_OBJ } from "../constats/DefaultErrorObj";
import { GetQuizType } from "../Types/Home.type";

export const getAllQuiz: GetQuizType = async (title, page) => {
    const response = await fetch(
        `${process.env.URL}/api/playlist?title=${title}&page=${page}`,
        {
            cache: "no-store",
        }
    )
        .then((data) => data.json())
        .then((data) => {
            if (!data?.playlist) {
                return DEFAULT_ERROR_OBJ();
            }
            return data;
        })
        .catch((e) => {
            return DEFAULT_ERROR_OBJ(e);
        });

    return response;
};