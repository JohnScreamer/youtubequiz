import mongoose from "mongoose";

const playlist = new mongoose.Schema(
    {
        totalAmount: { type: Number, required: true },
        list: [
            {
                url: {
                    type: String,
                },
                title: {
                    type: String,
                },
                img: {
                    type: String,
                },
            },
        ],
        title: { type: String, required: true },
    },
    { timestamps: true }
);

const Playlist =
    mongoose?.models?.Playlist || mongoose.model("Playlist", playlist);

export default Playlist;
