import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Pega o token do header

    if (!token) {
        return res.status(401).json({ error: "Acesso negado. Token não fornecido." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Adiciona os dados do usuário ao request
        next(); // Chama o próximo middleware ou rota
    } catch (error) {
        return res.status(403).json({ error: "Token inválido ou expirado." });
    }
};
