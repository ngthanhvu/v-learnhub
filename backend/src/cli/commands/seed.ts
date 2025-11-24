import { Command } from 'commander';
import knex, { Knex } from 'knex';
import config from '../../../knexfile.ts';
import chalk from 'chalk';

const seed = new Command('seed')
    .description('Chạy tất cả seed')
    .action(async (): Promise<void> => {
        const db: Knex = knex(config.development as any);
        try {
            const log = await db.seed.run();
            if (log[0].length === 0) {
                console.log(chalk.yellow('⚠️  Không có seed nào để chạy.'));
            } else {
                console.log(chalk.green(`🌱 Seeds run:`));
                log[0].forEach((file: string) => console.log('  -', file));
            }
        } catch (err: any) {
            console.error(chalk.red('❌ Lỗi khi chạy seed:'), err.message);
        } finally {
            await db.destroy();
        }
    });

export default seed;
