import express from "express";
import { Comment } from "../models/commentsSchema.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();


router.post("/create", userMiddleware, async (req, res) => {
    const { content, blogId } = req.body;
    if (!content || !blogId) {
        return res.status(400).json({
            msg: "Please enter all the fields ....",
        });
    }
    if (typeof content !== "string") {
        return res.status(400).json({
            msg: "Content must be a string ....",
        });
    }
    if (typeof blogId !== "string") {
        return res.status(400).json({
            msg: "Blog id must be a string .... ",
        });
    }

    // creating the comment and storing in db 

    const comment = await Comment.create({ ...req.body, userId: req.user });
    console.log("Comment created successfully ...", comment);
    return res.status(201).json({
        msg: "Comment created successfully ....",
        comment: comment,
    });

});

export default router;