require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./database/mongo");

const port = process.env.PORT || 3000;

//Settings

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Tu app esta lista por http://localhost:${port}`);
});

dbConnect();
