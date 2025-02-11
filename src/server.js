import express from 'express';
import userRoutes from "../src/routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`✅ API esta rodando na porta: ${PORT}`));