const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  createUsers,
  deleteUsers,
  updateUsers,
} = require("../controllers/users");

router.get("/", getUsers);

router.post("/", createUsers);

router.get("/:id", getUser);

router.delete("/:id", deleteUsers);

router.put("/:id", updateUsers);

module.exports = router;
