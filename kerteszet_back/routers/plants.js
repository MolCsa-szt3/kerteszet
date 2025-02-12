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
router.post("/", async (req, res) => {
  try {
    const { name, isPerenial, category, price } = req.body;
    if (!name || !isPerenial || !category || !price) {
      return res.status(400).json({ message: "MIssing Data!" });
    }
    const data = dbRun(
      "INSERT INTO plants (name, perennial, category, price) VALUES (?,?,?,?)",
      [name, isPerenial, category, price]
    );
    return res.status(201).json({ message: "Plant Successfully Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
export default router;
