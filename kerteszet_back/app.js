import express from "express";
import cors from "cors";
//import them routes

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//add routers

app.listen(PORT, () => {
  console.log(`Backend system is running on port ${PORT}`);
});
