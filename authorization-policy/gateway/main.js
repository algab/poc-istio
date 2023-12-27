const express = require("express");
const cors = require("cors");

const router = require("./gateway");

const app = express();

const port = 3003;
const BASE_URL = process.env.BASE_URL || "gateway";

app.use(cors());
app.use(`/${BASE_URL}`, router);

app.listen(port, () => {
  console.log(`Server Runing on Port ${port}`);
});
