import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { router as teamsRouter } from "./routes/teams.js";

dotenv.config();
const port = process.env.PORT || 3000;

connectDB();

const app = express();
app.use(express.json());
app.use("/api/teams", teamsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});