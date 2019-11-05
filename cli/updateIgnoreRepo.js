const _fs = require('fs');
const git = require('simple-git/promise');
const ora = require('ora');
const pify = require('pify');
const config = require('./config.js');
const fs = pify(_fs);

const {
    ignoreRepoSSHPath,
    repoFilePath,
    timestampFilePath,
    UpdateGapTime
} = config;

/**
 * 每周更新一次 repo
 */
async function updateIgnoreRepo() {
    /* 在 cache 目录中缓存上次更新的时间戳，每次执行 file add 操作前进行判断
    * */
    const spinner = ora(`updating git ignore repo`).start();

    const timestamp = await fs.readFile(timestampFilePath);

    const now = Date.now();
    if (now - timestamp > UpdateGapTime) {
        await git(repoFilePath)
            .silent(true)
            .pull();
        spinner.text = 'update succeed'
    }
    spinner.succeed('update ignore repo succeed');
}

module.exports = updateIgnoreRepo;
