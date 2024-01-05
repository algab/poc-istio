const express = require("express");
const cors = require("cors");

const PORT = 3000;

const app = express();

app.set(cors());

app.get("/application", (request, response) => {
  response.status(200).json({ message: "Application V1" }).end();
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
