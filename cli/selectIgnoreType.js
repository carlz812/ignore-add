'use strict';
const inquirer = require('inquirer');
const fuzzy = require('fuzzy');
const glob = require("glob");
const ora = require("ora");
const config = require('./config.js');
const _fs = require('fs');
const pify = require('pify');
const fs = pify(_fs);

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const {
    ignoreRepoSSHPath,
    repoFilePath,
} = config;

/**
 * 从 cache 目录中获取 git ignore files，存为 Map ，key 为小写 type，支持 检索
 */
function getIgnoreFileList() {
    return new Promise(function (resolve) {
        glob(`**/*.gitignore`, {
            cwd: repoFilePath,
            nocase: true
        }, function (er, files) {
            if (er) resolve([]);
            resolve(files)
        })
    })
}

/**
 * 根据开发者选择的类型创建 .gitignore 文件
 * @param type
 * @returns {Promise<void>}
 */
async function createGitIgnoreFIleFromType(type) {
    const cwd = process.cwd();
    const content = await fs.readFile(`${repoFilePath}/${type}`);
    return fs.writeFile(`${cwd}/.gitignore`, content)

}

/**
 * 选择 ignore 类型并创建对应文件
 */
function selectIgnoreType() {
    getIgnoreFileList().then((files) => {
        function search(answers, input) {
            input = input || '';
            return new Promise(function (resolve) {
                const fuzzyResult = fuzzy.filter(input, files);
                resolve(
                    fuzzyResult.map(function (el) {
                        return el.original;
                    })
                );
            });
        }

        inquirer
            .prompt([
                {
                    type: 'autocomplete',
                    name: 'type',
                    message: 'What kind of boilerplate do you want?',
                    source: search,
                    pageSize: 15,
                    validate: function (val) {
                        return val ? true : 'Type something!';
                    },
                }
            ])
            .then(function (answers) {
                const spinner = ora(`fetching git ignore repo`).start();
                createGitIgnoreFIleFromType(answers.type).then(() => {
                    spinner.succeed(`${answers.type} has added into your project`);
                }).catch((e) => {
                    spinner.succeed(e.message);
                })
            });
    });
}

module.exports = selectIgnoreType;
