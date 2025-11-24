import type { FastifyInstance } from 'fastify';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/usersController.ts';

export default async function (fastify: FastifyInstance, opts: any) {
    fastify.get('/', getUsers);
    fastify.get('/:id', getUserById);
    fastify.post('/', createUser);
    fastify.put('/:id', updateUser);
    fastify.delete('/:id', deleteUser);
}
