import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}); 

export const Blog = mongoose.model("Blog", blogSchema);


// one to many relation 
// one user can have many blogs 

// id     title    content         userId

// 1      first    first blog       100
// 2      second   second blog      100
// 3      third    third blog       100
// 4      fourth   fourth blog      200
