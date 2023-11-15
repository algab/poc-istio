const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const port = 3000 || process.env.PORT;

const APP_B = "http://localhost:3001";
const APP_C = "http://localhost:3002";

app.use(cors());

app.get("/a", (_, res) => {
  res.status(200).json({ message: "Application A"}).end();
});

app.get("/a/b", async (_, res) => {
  await axios(`${APP_B}/b`);
  res.status(200).json({ message: "Application A -> B"}).end();
});

app.get("/a/c", async (_, res) => {
  await axios(`${APP_C}/c`);
  res.status(200).json({ message: "Application A -> C"}).end();
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});