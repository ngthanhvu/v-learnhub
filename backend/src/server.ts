import app from './app.ts';

const start = async (): Promise<void> => {
    try {
        await app.listen({ port: parseInt(process.env.PORT || '3001') });
        console.log(`🚀 Server running at http://localhost:${process.env.PORT || 3001}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
