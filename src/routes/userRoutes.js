import express from "express";
import { createUser } from "../controllers/UsersControllers.js";

const router = express.Router();

// Rota para criar um usuário
router.post("/", createUser);

export default router;