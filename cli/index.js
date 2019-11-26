#!/usr/bin/env node
const program = require('commander');
const PKG = require('../package.json');
const PostInstall = require('./postInstall.js');
const UpdateIgnoreRepo = require('./updateIgnoreRepo.js');
const SelectIgnoreType = require('./selectIgnoreType.js');

program
    .version(PKG.version);

program
    .command('postInstall')
    .description('List all the .gitignore template')
    .action(PostInstall);

program
    .command('add')
    .description('create specific git ignore type to current project')
    .action(SelectIgnoreType);

program
    .command('update')
    .description('update git ignore file content from remote')
    .action(UpdateIgnoreRepo);

program
    .command('help', { isDefault: true })
    .action(function () {
        program.outputHelp();
    });

program
    .parse(process.argv);


if (process.argv.length === 2) {
    program.outputHelp();
}
