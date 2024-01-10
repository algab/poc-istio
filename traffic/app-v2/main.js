const express = require("express");
const cors = require("cors");

const app = express();

app.set(cors());

const PORT = 3000;

app.get("/application", (request, response) => {
  if (random() === 1) {
    console.log("Response with successful");
    response.status(200).json({ message: "Application V2" }).end();    
  } else {
    console.log("Response with error");
    response.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});

const random = () => {
  return Math.floor(Math.random() * 2);
};
