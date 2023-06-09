import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Playlist from "../models/PlaylistModel";
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title");
    console.log(title);

    if (!title) {
        await mongoose.connect(
            "mongodb+srv://ivuk:ivuk@cluster0.2ctyuog.mongodb.net/?retryWrites=true&w=majority"
        );

        const playlist = await Playlist.find();

        return NextResponse.json({ playlist });
    }

    await mongoose.connect(
        "mongodb+srv://ivuk:ivuk@cluster0.2ctyuog.mongodb.net/?retryWrites=true&w=majority"
    );

    const playlist = await Playlist.find({ title: { $regex: title } });

    return NextResponse.json({ playlist });
}
