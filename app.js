require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./src/database/mongo");

const PORT = process.env.PORT || 3000;

//Settings

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", require("./src/routes"));

app.listen(PORT, () => {
  console.log(`Tu app esta lista por http://localhost:${PORT}`);
});

dbConnect();
