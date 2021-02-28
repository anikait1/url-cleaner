import express from "express";
import amazonCleaner from "./cleaners/amazon-cleaner";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  const url = new URL(req.body.url);
  amazonCleaner(url);

  res.send("hi");
});

app.listen(5000, () => {
  console.log("server is up");
});
