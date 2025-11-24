#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';

import migrate from './commands/migrate.ts';
import rollback from './commands/rollback.ts';
import seed from './commands/seed.ts';
import makeMigration from './commands/makeMigration.ts';

const program = new Command();

console.log(chalk.cyan(figlet.textSync('Fastify CLI', { horizontalLayout: 'full' })));
console.log(chalk.gray('-------------------------------------------'));

program.addCommand(migrate);
program.addCommand(rollback);
program.addCommand(seed);
program.addCommand(makeMigration);

program.parse(process.argv);
