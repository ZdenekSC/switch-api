import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
import cors from "cors";



import dotenv from "dotenv";
dotenv.config();

const app = express();

// connect to mongoDB database
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0jxp3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

// middleware
app.use(cors());
app.use(express.json());
app.use("/switch", route);


const port = process.env.PORT || 3000;
// listening to port
app.listen(port, () => console.log(`Server Running at port: ${port}`));

