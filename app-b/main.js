const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const port = 3001;

const APP_A = "http://localhost:3000";
const APP_C = "http://localhost:3002";

app.use(cors());

app.get("/b", (_, res) => {
  res.status(200).json({ message: "Application B"}).end();
});

app.get("/b/a", async (_, res) => {
  await axios(`${APP_A}/a`);
  res.status(200).json({ message: "Application B -> A"}).end();
});

app.get("/b/c", async (_, res) => {
  await axios(`${APP_C}/c`);
  res.status(200).json({ message: "Application B -> C"}).end();
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});