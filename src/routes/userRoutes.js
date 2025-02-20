import express from "express";
import { createUser, loginUser, getAllUsers, getUserByEmail} from "../controllers/UsersControllers.js";
const router = express.Router();

// Rota para criar um usuário
router.post("/register", createUser);
// Rota para buscar todos os usuários
router.get("/getAllUsers", getAllUsers);
// Rota para buscar um usuario pelo email
router.get("/:email", getUserByEmail);
//Rota para login
router.get("/login", loginUser);

export default router;