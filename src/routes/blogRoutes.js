import express from "express";
import { Blog } from "../models/blogSchema.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";
import { User } from "../models/userSchema.js";
const router = express.Router();

// http://localhost:5000/blogs/create = > post
router.post("/create", userMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({
                msg: "Please enter all the fields ....",
            });
        }
        // validate the input data coming from the client 
        if (typeof title !== "string") {
            return res.status(400).json({
                msg: "Title must be a string ....",
            });
        }
        if (typeof content !== "string") {
            return res.status(400).json({
                msg: "content must be a string ....",
            });
        }
        // storing the data from the client on to the DB
        // { title: : "name", content: "content" }
        const userId = req.user;
        const blog = await Blog.create({ ...req.body, userId: userId });
        console.log("Blog created successfully ... ");
        console.log("blog is: ", blog);
       
        return res.status(201).json({
            msg: "Blog created successfully ....",
            blog: blog,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Some issue with the server ....",
        });
    }
});

export default router;