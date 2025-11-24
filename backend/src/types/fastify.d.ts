import 'fastify';

declare module 'fastify' {
    interface FastifyInstance {
        fastifyLogger: {
            log: (context: string, msg: string) => void;
            warn: (context: string, msg: string) => void;
            error: (context: string, msg: string) => void;
            colorStatus: (status: number) => string;
        };
    }
}
