const express = require("express");
const router = express.Router();

const {
  getNotes,
  createNotes,
  getNote,
  deleteNotes,
  updateNotes,
} = require("../controllers/notes");

router.get("/", getNotes);

router.post("/", createNotes);

router.get("/:id", getNote);

router.delete("/:id", deleteNotes);

router.put("/:id", updateNotes);

module.exports = router;
