#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import knex, { Knex } from 'knex';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../knexfile.ts';

const program = new Command();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Banner
console.log(chalk.cyan(figlet.textSync('Fastify CLI', { horizontalLayout: 'full' })));
console.log(chalk.gray('-------------------------------------------'));

// Helper: khởi tạo knex
function getDb(): Knex {
    return knex(config.development);
}

// === Commands ===

// 🟢 migrate
program
    .command('migrate')
    .description('Chạy tất cả migration')
    .action(async (): Promise<void> => {
        const db = getDb();
        try {
            const [batch, log] = await db.migrate.latest();
            if (log.length === 0) console.log(chalk.yellow('⚠️  Không có migration nào để chạy.'));
            else {
                console.log(chalk.green(`✅ Batch ${batch} run:`));
                log.forEach((f: string) => console.log('  -', f));
            }
        } catch (err: any) {
            console.error(chalk.red('❌ Migration error:'), err.message);
        } finally {
            await db.destroy();
        }
    });

// 🔙 rollback
program
    .command('rollback')
    .description('Rollback migration gần nhất')
    .action(async (): Promise<void> => {
        const db = getDb();
        try {
            const [batch, log] = await db.migrate.rollback();
            if (log.length === 0) console.log(chalk.yellow('⚠️  Không có gì để rollback.'));
            else {
                console.log(chalk.green(`🔄 Rollback batch ${batch}:`));
                log.forEach((f: string) => console.log('  -', f));
            }
        } catch (err: any) {
            console.error(chalk.red('❌ Rollback error:'), err.message);
        } finally {
            await db.destroy();
        }
    });

// 🌱 seed
program
    .command('seed')
    .description('Chạy tất cả seed')
    .action(async (): Promise<void> => {
        const db = getDb();
        try {
            const [files] = await db.seed.run();
            if (!files || files.length === 0) console.log(chalk.yellow('⚠️  Không có seed nào để chạy.'));
            else {
                console.log(chalk.green('🌱 Seeds run:'));
                files.forEach((f: string) => console.log('  -', f));
            }
        } catch (err: any) {
            console.error(chalk.red('❌ Seed error:'), err.message);
        } finally {
            await db.destroy();
        }
    });

// 🏗️ make:migration
program
    .command('make:migration <name>')
    .description('Tạo file migration mới')
    .action(async (name: string): Promise<void> => {
        const db = getDb();
        const dir = path.resolve('./src/database/migrations');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        try {
            const file = await db.migrate.make(name, { directory: dir });
            console.log(chalk.green(`✨ Migration created: ${file}`));
        } catch (err: any) {
            console.error(chalk.red('❌ Lỗi tạo migration:'), err.message);
        } finally {
            await db.destroy();
        }
    });

program.parse(process.argv);
