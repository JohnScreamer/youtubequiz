import mongoose from "mongoose";

const test = new mongoose.Schema(
    {
        totalAmount: String,
    },
    { timestamps: true }
);
const Test = mongoose.models.test || mongoose.model("test", test);

export default Test;
