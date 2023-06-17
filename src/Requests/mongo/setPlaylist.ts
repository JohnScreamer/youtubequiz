import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Playlist from "../../../app/api/models/PlaylistModel";
import { allData } from "../../Types/BackApi.type";

export const setPlaylist = async (obj: allData) => {
    await mongoose.connect(
        "mongodb+srv://ivuk:ivuk@cluster0.2ctyuog.mongodb.net/?retryWrites=true&w=majority"
    );

    const playlist = new Playlist({
        totalAmount: obj.totalAmount,
        list: obj.list,
        title: obj.title,
    });
    if (!playlist) {
        return NextResponse.error();
    }

    const newPlaylist = await playlist.save();
    return newPlaylist;
};
