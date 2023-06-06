import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
});
export default mongoose.model("books", BookSchema);
