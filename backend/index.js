import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import fileRoute from "./routes/fileRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("Backend Running");
});
app.use('/user', userRoute);
app.use('/file', fileRoute);

const PORT = 5000;
app.listen(PORT, ()=>{
    connectDB();
    console.log(`server running at port ${PORT}`);
})