import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Server running successfully.");
});

const port = 5500 || 5500;
app.listen(port, (req, res) => {
  console.log(`Server is running successfully on port ${port}.`);
});
