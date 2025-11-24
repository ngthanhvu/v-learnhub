import { Command } from 'commander';
import knex, { Knex } from 'knex';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../../../knexfile.ts';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const makeMigration = new Command('make:migration')
    .arguments('<name>')
    .description('Tạo file migration mới')
    .action(async (name: string): Promise<void> => {
        const db: Knex = knex(config.development as any);
        const dir = path.resolve('./src/database/migrations');

        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        try {
            const file = await db.migrate.make(name, { directory: dir });
            console.log(chalk.green(`✨ Migration created: ${file}`));
        } catch (err: any) {
            console.error(chalk.red('❌ Lỗi khi tạo migration:'), err.message);
        } finally {
            await db.destroy();
        }
    });

export default makeMigration;
