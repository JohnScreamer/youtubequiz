"use client";
import { FC, useState } from "react";
import DefBtn from "../../uikit/btn/DefBtn";
import CustomInput from "../../uikit/CustomInput/CustomInput";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import sleepCat from "./../../../../../public/sllipycatgif.gif";
import { useScrollToTop } from "../../../../../src/hooks/useScrollToTop";
type SearchType = {};

const Search: FC<SearchType> = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const [value, setValue] = useState(title || "");
    const router = useRouter();
    useScrollToTop();
    const isEmpty = !title && !value;
    const search = () => {
        if (isEmpty) {
            return;
        }
        router.push(`/?title=${value}`);
    };

    return (
        <div className="inline-flex justify-end items-end  ">
            <div className=" md:max-w-[300px] max-w-full md:flex-row flex-col relative  w-full flex items-center gap-2">
                <CustomInput
                    type="text"
                    value={value}
                    id="search"
                    sx="text-base py-3 grow "
                    onChange={(e) => setValue(e.target.value)}
                />
                <label
                    htmlFor="search"
                    className="absolute top-[-52px] right-[50%]"
                >
                    <Image
                        src={sleepCat}
                        width={80}
                        alt="cat logo"
                        height={40}
                    />
                </label>
                <div className="max-[768px]:hidden ">
                    <DefBtn
                        disabled={isEmpty}
                        sx="   py-[8px] px-[8px]   "
                        onClick={search}
                    >
                        <SearchIcon />
                    </DefBtn>
                </div>
                <DefBtn
                    disabled={isEmpty}
                    sx="md:hidden  py-[8px] px-[8px]   onClick={search} "
                >
                    <SearchIcon />
                </DefBtn>
            </div>
        </div>
    );
};

export default Search;
