const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const port = 3002;

const APP_A = "http://localhost:3000";
const APP_B = "http://localhost:3001";

app.use(cors());

app.get("/c", (_, res) => {
  res.status(200).json({ message: "Application C"}).end();
});

app.get("/c/a", async (_, res) => {
  await axios(`${APP_A}/a`);
  res.status(200).json({ message: "Application C -> A"}).end();
});

app.get("/c/b", async (_, res) => {
  await axios(`${APP_B}/b`);
  res.status(200).json({ message: "Application C -> B"}).end();
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});