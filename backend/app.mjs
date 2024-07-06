import express from "express";
const app = express();
import { BASE_URL, BASE_PORT } from "./config.mjs";

app.use(`/`, express.static("public/images"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//
app.listen(BASE_PORT, () => {
  console.log(`server is starting on http://${BASE_URL}:${BASE_PORT}/api`);
});
