import express from "express";
import { createUser } from "../controllers/UsersControllers.js";
import { getAllUsers } from "../controllers/UsersControllers.js";
import { getUserByNameAndEmail } from "../controllers/UsersControllers.js";

const router = express.Router();

// Rota para criar um usuário
router.post("/", createUser);
// Rota para buscar todos os usuários
router.get("/todosUsuarios", getAllUsers);
// Rota para buscar um usuario pelo nome
router.get("/:nome", getUserByNameAndEmail);

export default router;