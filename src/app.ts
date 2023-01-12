import express, { Application } from "express";
import HttpStatus from "http-status-codes";
import userRoutes from "./user/user.router";

const app: Application = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(HttpStatus.OK).send("Success!");
});

app.use("/users", userRoutes);


app.all("*", (req, res) => {
  return res.status(HttpStatus.NOT_FOUND).end();
});

app.listen(port);
