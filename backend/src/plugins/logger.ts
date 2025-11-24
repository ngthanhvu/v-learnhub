import chalk from 'chalk';
import fp from 'fastify-plugin';

function formatFastifyLog(level: string, context: string, message: string) {
    const time = new Date().toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const colorLevel =
        level === 'LOG' ? chalk.green.bold(level)
        : level === 'WARN' ? chalk.yellow.bold(level)
        : level === 'ERROR' ? chalk.red.bold(level)
        : chalk.cyan.bold(level);

    const colorContext = chalk.cyan(`[${context}]`);

    return '[Fastify] ' + time + ' ' + colorLevel + ' ' + colorContext + ' ' + message;
}

function colorStatus(status: number) {
    const s = status.toString();

    if (status >= 500) return chalk.red.bold(s);
    if (status >= 400) return chalk.yellow.bold(s);
    if (status >= 300) return chalk.cyan.bold(s);
    return chalk.green.bold(s);
}

export default fp(async (fastify) => {
    fastify.decorate('fastifyLogger', {
        log: (context: string, msg: string) => {
            console.log(formatFastifyLog('LOG', context, msg));
        },
        warn: (context: string, msg: string) => {
            console.warn(formatFastifyLog('WARN', context, msg));
        },
        error: (context: string, msg: string) => {
            console.error(formatFastifyLog('ERROR', context, msg));
        },
        colorStatus
    });
});
