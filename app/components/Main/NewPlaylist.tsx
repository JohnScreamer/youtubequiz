"use client";
import { FC, FormEvent, useState } from "react";
import DefBtn from "../uikit/btn/DefBtn";
import CustomInput from "../uikit/CustomInput/CustomInput";
import { useRouter } from "next/navigation";
import Spiner from "../uikit/Spiner/Spiner";
import { ToasterFn } from "../modal/toasterFn";

type NewPlaylistType = {};

const NewPlaylist: FC<NewPlaylistType> = () => {
    const [data, setData] = useState({ name: "", link: "" });
    const [isLoading, setLoadingStatus] = useState(false);
    const router = useRouter();
    const isEmpty = !data.link || !data.name;
    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.name.length < 5 || data.link.length < 5) {
            ToasterFn.error("name length");
            return;
        }
        setLoadingStatus(true);
        await fetch(`/api?title=${data.name}&url=${data.link}`).then((data) =>
            data.json()
        );
        router.refresh();

        ToasterFn.success(`Create ${name} playlist`);
        setData({ name: "", link: "" });
        setLoadingStatus(false);
    };

    return (
        <div className=" p-4  upStyleNoAnim ">
            <form onSubmit={submit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="flex flex-col gap-1">
                        <span>Name for playlist:</span>
                        <CustomInput
                            type="text"
                            id="name"
                            value={data.name}
                            sx="text-base py-3"
                            onChange={(e) =>
                                setData((data) => ({
                                    ...data,
                                    name: e.target.value,
                                }))
                            }
                        />
                    </label>
                    <label htmlFor="playlist" className="flex flex-col gap-1">
                        <span>Playlist URL:</span>
                        <CustomInput
                            value={data.link}
                            onChange={(e) =>
                                setData((data) => ({
                                    ...data,
                                    link: e.target.value,
                                }))
                            }
                            sx="text-base py-3"
                            type="text"
                            id="playlist"
                        />
                    </label>
                </div>
                <div className="mt-2">
                    <DefBtn
                        type="submit"
                        variant="success"
                        disabled={isEmpty}
                        sx="py-[8px]"
                    >
                        create playlist
                    </DefBtn>
                </div>
            </form>
            {isLoading ? <Spiner /> : null}
        </div>
    );
};

export default NewPlaylist;
