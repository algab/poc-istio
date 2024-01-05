const express = require("express");
const cors = require("cors");

const app = express();

app.set(cors());

const PORT = 3000;

app.get("/application", (request, response) => {
  response.status(200).json({ message: "Application V2" }).end();
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
