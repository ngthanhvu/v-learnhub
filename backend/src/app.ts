import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import dotenv from 'dotenv';
import dbPlugin from './plugins/db.ts';
import fastifyLogger from './plugins/logger.ts';
import indexRoutes from './routes/index.ts';
import usersRoutes from './routes/users.ts';

dotenv.config();

const app: FastifyInstance = Fastify({ logger: false });

app.register(fastifyLogger);

app.addHook('onRequest', (req, reply, done) => {
    app.fastifyLogger.log('Request', `${req.method} ${req.url}`);
    done();
});

app.addHook('onResponse', (req, reply, done) => {
    const status = reply.statusCode;
    const coloredStatus = app.fastifyLogger.colorStatus(status);

    app.fastifyLogger.log(
        'Response',
        req.method + ' ' + req.url + ' -> ' + coloredStatus
    );

    done();
});

app.register(dbPlugin);
app.register(indexRoutes);
app.register(usersRoutes, { prefix: '/users' });

export default app;
