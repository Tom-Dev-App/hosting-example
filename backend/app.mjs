import express from "express";
const app = express();
import { BASE_URL, BASE_PORT } from "./config.mjs";
import routes from "./routes.mjs";

app.use(`/public/images`, express.static("public/images"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
/*
  FOR DEVELOPMENT ONLY
  PARENT ROUTE @BASE_URL:BASE_PORT/file
  - @POST /file/upload
  - @GET /file/photos

  FOR PRODUCTION WITH DOMAIN NAME
  PARENT ROUTE @<DOMAIN URL>/api
  - @POST /file/upload
  - @GET /file/photos
*/
app.use("/file", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong", error: err.message });
});
app.listen(BASE_PORT, () => {
  console.log(`server is starting on http://${BASE_URL}:${BASE_PORT}/`);
});
