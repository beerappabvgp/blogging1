import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js";

const app = express();
// It parses the request body and gives you access to client data at req.body
app.use(express.json());
const port = 5000;

const mongo_url = "mongodb+srv://beerappabharathb:Ij3kwygvXY9TDtxO@cluster0.qs3tg.mongodb.net/blogging?retryWrites=true&w=majority&appName=Cluster0";


const connectToDB = async () => {
    await mongoose.connect(mongo_url);
    console.log("Connected to the mongoDB ");
}

connectToDB(); 

app.use("/comments", commentsRoutes);
app.use("/blogs", blogRoutes);
app.use("/users", userRouter);


app.listen(port, () => {
    console.log("server is up and running on port 5000");
});

// get, post, update, delete