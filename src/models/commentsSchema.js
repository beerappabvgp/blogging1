import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    blogId: { type: Schema.Types.ObjectId, ref: "Blog" },
    // The one who is commenting 
    userId: { type: Schema.Types.ObjectId, ref: "User" }
});


export const Comment = mongoose.model("Comment", commentSchema);