import { FC, useEffect, useState } from "react";

type CounterType = {
    startNum: number;
};

const Counter: FC<CounterType> = ({ startNum }) => {
    const [value, setValue] = useState(startNum);
    useEffect(() => {
        if (value) {
            setTimeout(() => setValue((value) => value - 1), 1000);
        }
    }, [value]);

    if (!value) {
        return null;
    }

    return (
        <div className="flex justify-center">
            <span className="animate-[countAnim_1s_ease-in-out_infinite] pixel font-bold  text-4xl ">
                {" "}
                {value}
            </span>
        </div>
    );
};

export default Counter;
