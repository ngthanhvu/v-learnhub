import bcrypt from 'bcrypt';
import type { FastifyRequest, FastifyReply } from 'fastify';
import * as userService from '../services/usersService.ts';

interface CreateUserBody {
    name: string;
    email: string;
    password: string;
}

interface UpdateUserBody {
    name?: string;
    email?: string;
    password?: string;
}

interface UserParams {
    id: string;
}

/**
 * Lấy danh sách tất cả users
 */
export async function getUsers(req: FastifyRequest, reply: FastifyReply) {
    try {
        const users = await userService.getAll(req.server.db);
        reply.send(users);
    } catch (err) {
        console.error(err);
        reply.code(500).send({ message: 'Internal server error' });
    }
}

/**
 * Lấy user theo ID
 */
export async function getUserById(req: FastifyRequest<{ Params: UserParams }>, reply: FastifyReply) {
    try {
        const user = await userService.getById(req.server.db, parseInt(req.params.id));
        if (!user) {
            return reply.code(404).send({ message: 'User not found' });
        }
        reply.send(user);
    } catch (err) {
        console.error(err);
        reply.code(500).send({ message: 'Internal server error' });
    }
}

/**
 * Tạo user mới (có hash password)
 */
export async function createUser(req: FastifyRequest<{ Body: CreateUserBody }>, reply: FastifyReply) {
    try {
        const { name, email, password } = req.body;

        // Kiểm tra dữ liệu đầu vào
        if (!name || !email || !password) {
            return reply.code(400).send({ message: 'Name, email và password là bắt buộc' });
        }

        // Hash mật khẩu (giống Laravel Hash::make)
        const hashedPassword = await bcrypt.hash(password, 10);

        const id = await userService.create(req.server.db, {
            name,
            email,
            password: hashedPassword,
        });

        reply.code(201).send({ id, message: 'User created successfully' });
    } catch (err: any) {
        console.error(err);
        // Nếu MySQL báo trùng email chẳng hạn
        if (err.code === 'ER_DUP_ENTRY') {
            return reply.code(400).send({ message: 'Email already exists' });
        }
        reply.code(500).send({ message: 'Internal server error' });
    }
}

/**
 * Cập nhật user
 */
export async function updateUser(req: FastifyRequest<{ Params: UserParams; Body: UpdateUserBody }>, reply: FastifyReply) {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const dataToUpdate: userService.UpdateUserData = {};
        if (name) dataToUpdate.name = name;
        if (email) dataToUpdate.email = email;
        if (password) {
            dataToUpdate.password = await bcrypt.hash(password, 10);
        }

        const result = await userService.update(req.server.db, parseInt(id), dataToUpdate);
        reply.send({ message: 'User updated successfully', result });
    } catch (err) {
        console.error(err);
        reply.code(500).send({ message: 'Internal server error' });
    }
}

/**
 * Xóa user
 */
export async function deleteUser(req: FastifyRequest<{ Params: UserParams }>, reply: FastifyReply) {
    try {
        const result = await userService.remove(req.server.db, parseInt(req.params.id));
        reply.send({ message: 'User deleted successfully', result });
    } catch (err) {
        console.error(err);
        reply.code(500).send({ message: 'Internal server error' });
    }
}
