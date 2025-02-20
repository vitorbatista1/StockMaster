import { PrismaClient } from "@prisma/client";
import bcrtypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

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

export const loginUser = async (req, res) => {
    console.log("🔹 Rota de login foi chamada"); // Primeiro log

    const { email, senha } = req.body;
    console.log("📩 Dados recebidos:", email, senha); // Log dos dados recebidos

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        console.log("🧐 Usuário encontrado:", user); // Log do usuário encontrado

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        
        const senhaValida = await bcrypt.compare(senha, user.senha);
        if (!senhaValida) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, cargo: user.cargo },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
        );

        return res.status(200).json({
            message: 'Login realizado com sucesso',
            token
        });

    } catch (error) {
        console.error("🚨 Erro no login:", error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};



export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                cargo: true
            }
        });
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
        console.error(error.message);
    }
};

export const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                nome: true,
                email: true,
                cargo: true
            }
        });
        if (!user) {
            return res.status(404).json({ error: 'Usuário nao encontrado' });
        }
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário' });
        console.error(error.message);
    }
};  