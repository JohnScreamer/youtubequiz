import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Playlist from "../models/PlaylistModel";
import { SETTINGS } from "../../../src/constats/GameSettings";
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title");
    let page = +searchParams.get("page");
    if (typeof page !== "number") {
        page = 0;
    }
    if (!title) {
        await mongoose.connect(
            "mongodb+srv://ivuk:ivuk@cluster0.2ctyuog.mongodb.net/?retryWrites=true&w=majority"
        );

        const playlist = await Playlist.find()
            .sort({ createdAt: SETTINGS.REQUEST.ORDER })
            .skip(page)
            .limit(SETTINGS.REQUEST.MAX_ITEM);
        const length = await Playlist.find();
        return NextResponse.json({ playlist, page: length.length });
    }

    await mongoose.connect(
        "mongodb+srv://ivuk:ivuk@cluster0.2ctyuog.mongodb.net/?retryWrites=true&w=majority"
    );

    const playlist = await Playlist.find({ title: { $regex: title } })
        .find()
        .sort({ createdAt: SETTINGS.REQUEST.ORDER })
        .skip(page)
        .limit(SETTINGS.REQUEST.MAX_ITEM);
    const length = await Playlist.find({ title: { $regex: title } });
    return NextResponse.json({ playlist, page: length.length });
}
