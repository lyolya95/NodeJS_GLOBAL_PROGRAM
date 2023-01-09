import express, { Application } from "express";
import HttpStatus from "http-status-codes";

import userRoutes from "./routes/user";

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.status(HttpStatus.OK).send("Success!");
});

app.use("/users", userRoutes);

app.listen(port);
