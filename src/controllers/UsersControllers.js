import { PrismaClient } from "@prisma/client";
import bcrtypt from "bcryptjs";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
    const { nome, email, senha, cargo } = req.body;

    const senhaCriptografada = await bcrtypt.hash(senha, 10);

    if (!nome || !email || !senha || !cargo) {
        return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        return res.status(400).json({ error: 'E-mail ja cadastrado' });
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                nome,
                email,
                senha: senhaCriptografada,
                cargo
            }
        });
        return res.status(201).json({ 
            message: true,
            message: 'Usuário criado com sucesso',
            data: {
                nome: newUser.nome,
                email: newUser.email,
                cargo: newUser.cargo
            }
        });
        
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
        console.error(error.message);
    }
};
