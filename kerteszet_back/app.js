import express from "express";
import cors from "cors";
import { initializeDB } from "./data/database.js";
import plantsRouter from "./routers/plants.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/plants", plantsRouter);
//add routers

app.listen(PORT, () => {
  initializeDB();
  console.log(`Backend system is running on port ${PORT}`);
});
