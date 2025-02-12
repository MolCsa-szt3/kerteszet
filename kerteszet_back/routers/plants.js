import express from "express";
import { dbAll, dbGet, dbRun } from "../data/database.js";

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const data = await dbAll("Select * FROM plants");
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
export default router;
