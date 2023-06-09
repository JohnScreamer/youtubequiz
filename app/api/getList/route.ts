import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Playlist from "../models/PlaylistModel";
import { headers } from "next/headers";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ playlist: "434344" });
    }

    await mongoose.connect(
        "mongodb+srv://ivuk:ivuk@cluster0.2ctyuog.mongodb.net/?retryWrites=true&w=majority"
    );

    const playlist = await Playlist.findById(id);

    if (!playlist) {
        return NextResponse.error();
    }
    return NextResponse.json({ playlist });
}
