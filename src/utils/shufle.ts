const randomNum = (to: number) => {
    return Math.floor(Math.random() * to);
};

type VideoType = {
    url: string;
    title: string;
    img: string;
    _id: string;
};
export const shuffleArr = <T>(arr: Array<VideoType>) => {
    if (!Array.isArray(arr)) {
        return [];
    }
    const startArr = [...arr];
    const rezArr: Array<VideoType> = [];
    while (startArr.length) {
        const newElem = startArr.splice(randomNum(startArr.length), 1);
        if (
            newElem[0].title === "Deleted video" ||
            newElem[0].title === "Private video"
        ) {
            continue;
        }
        rezArr.push(...newElem);
    }
    return rezArr;
};

export const randomSec = () => {
    return Math.floor(Math.random() * 35) + 40;
};
