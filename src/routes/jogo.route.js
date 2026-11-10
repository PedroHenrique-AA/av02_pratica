import { jogoController } from "../controllers/jogo.controller.js";
import { Router } from "express";

export const jogoRouter = Router();

jogoRouter.get("/", jogoController.getAll);
jogoRouter.get("/:id", jogoController.getById);
jogoRouter.post("/", jogoController.create);
jogoRouter.delete("/:id", jogoController.delete);
jogoRouter.patch("/:id", jogoController.knexPatch);