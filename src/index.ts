import express from "express";
import domainMapper from "./utils/domain-mapper";

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  if (!req.body.url) {
    res.status(400).json({ error: "No url provided" });
  } else {
    next();
  }
});

app.post("/", (req, res) => {
  const url = new URL(req.body.url);
  const origin = url.origin;

  const cleaner = domainMapper[origin];

  if (cleaner) {
    res.send(cleaner(url));
  } else {
    res.status(200).json({ message: "Website not supported " });
  }
});

app.listen(5000, () => {
  console.log("server is up");
});
