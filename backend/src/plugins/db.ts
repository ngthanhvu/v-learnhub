import fp from 'fastify-plugin';
import mysql from 'mysql2/promise';
import type { FastifyInstance } from 'fastify';

declare module 'fastify' {
    interface FastifyInstance {
        db: mysql.Pool;
    }
}

export default fp(async (fastify: FastifyInstance, opts: any) => {
    const connection = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        database: process.env.DB_NAME || 'test_db',
        port: parseInt(process.env.DB_PORT || '3309'),
        waitForConnections: true,
        connectionLimit: 10,
    });

    fastify.decorate('db', connection);
});
