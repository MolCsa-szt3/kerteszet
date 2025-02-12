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
    const { name, perennial, category, price } = req.body;
    if (!name || !`${perennial}` || !category || !price) {
      return res.status(400).json({ message: "Missing Data!" });
    }
    console.log(name, perennial, category, price);
    const data = await dbRun(
      "INSERT INTO plants (name, perennial, category, price) VALUES (?,?,?,?)",
      [name, perennial, category, price]
    );

    return res.status(201).json({ message: "Plant Successfully Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { name, perennial, category, price } = req.body;
    if (!name || !`${perennial}` || !category || !price) {
      return res.status(400).json({ message: "Missing Data!" });
    }

    const foundById = dbGet("SELECT * FROM plants WHERE id=?", [req.params.id]);
    if (!foundById) {
      return res.status(404).json({ message: "Plant not found!" });
    }

    const run = await dbRun(
      "UPDATE plants SET name=?, perennial=?, category=?, price=? WHERE id=?",
      [name, perennial, category, price, req.params.id]
    );
    return res.status(201).json({ message: "Plant Successfully Altered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const foundById = dbGet("SELECT * FROM plants WHERE id=?", [req.params.id]);
    if (!foundById) {
      return res.status(404).json({ message: "Plant not found!" });
    }

    const run = await dbRun("DELETE FROM plant WHERE id=?", [req.params.id]);

    return res.status(201).json({ message: "Plant Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
export default router;
