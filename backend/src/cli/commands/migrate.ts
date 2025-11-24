import { Command } from 'commander';
import knex, { Knex } from 'knex';
import config from '../../../knexfile.ts';
import chalk from 'chalk';

const migrate = new Command('migrate')
    .description('Chạy toàn bộ migration')
    .action(async (): Promise<void> => {
        const db: Knex = knex(config.development);
        try {
            const [batch, log] = await db.migrate.latest();
            if (log.length === 0) {
                console.log(chalk.yellow('⚠️  Không có migration nào để chạy.'));
            } else {
                console.log(chalk.green(`✅ Batch ${batch} run:`));
                log.forEach((file: string) => console.log('  -', file));
            }
        } catch (err: any) {
            console.error(chalk.red('❌ Lỗi chạy migration:'), err.message);
        } finally {
            await db.destroy();
        }
    });

export default migrate;
