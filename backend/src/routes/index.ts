import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function (fastify: FastifyInstance, opts: any) {
    fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
        return { message: 'Hello Fastify 👋' };
    });
}
