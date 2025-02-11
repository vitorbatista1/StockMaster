import express from "express";
import { createUser } from "../controllers/UsersControllers.js";
import { getAllUsers } from "../controllers/UsersControllers.js";
import { getUserByNameAndEmail } from "../controllers/UsersControllers.js";

const router = express.Router();

// Rota para criar um usuário
router.post("/register", createUser);
// Rota para buscar todos os usuários
router.get("/getAllUsers", getAllUsers);
// Rota para buscar um usuario pelo nome
router.get("/:name", getUserByNameAndEmail);

export default router;