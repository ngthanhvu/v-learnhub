import { Command } from 'commander';
import knex, { Knex } from 'knex';
import config from '../../../knexfile.ts';
import chalk from 'chalk';

const rollback = new Command('rollback')
    .description('Rollback migration gần nhất')
    .action(async (): Promise<void> => {
        const db: Knex = knex(config.development);
        try {
            const [batch, log] = await db.migrate.rollback();
            if (log.length === 0) {
                console.log(chalk.yellow('⚠️  Không có migration nào để rollback.'));
            } else {
                console.log(chalk.green(`🔄 Rollback batch ${batch}:`));
                log.forEach((file: string) => console.log('  -', file));
            }
        } catch (err: any) {
            console.error(chalk.red('❌ Lỗi rollback:'), err.message);
        } finally {
            await db.destroy();
        }
    });

export default rollback;
