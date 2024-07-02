import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { router as teamsRouter } from "./routes/teams.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 3000;

connectDB();

const app = express();
app.use(cors({
    origin: "https://fuchibol-client.netlify.app",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: "GET, POST, PUT, DELETE",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/teams", teamsRouter);
export default app;