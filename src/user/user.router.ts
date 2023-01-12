import express from "express";
import * as usersController from "./user.controller";
import { validateUser } from "./user.validation";

const router = express.Router();

router.get("/", usersController.getAllUsers);

router.get('/:id', usersController.getUserById);

router.post("/", validateUser, usersController.createUser);

router.put("/:id", validateUser, usersController.updateUser);

router.delete("/:id", usersController.deleteUser);

export default router;
