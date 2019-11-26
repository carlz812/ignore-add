const _fs = require('fs');
const git = require('simple-git/promise');
const ora = require('ora');
const pify = require('pify');
const config = require('./config.js');
const fs = pify(_fs);

const {
    ignoreRepoSSHPath,
    localCachePath,
    repoFilePath,
    timestampFilePath,
} = config;

async function postInstall() {
    const spinner = ora('post installing').start();
    await createCacheDir();
    await createIgnoreCacheRepo();

    spinner.succeed('post install succeed');
}

async function createCacheDir() {
    const exist = await fs.existsSync(localCachePath);
    return exist || await Promise
        .all([
            fs.mkdirSync(localCachePath),
            fs.writeFileSync(timestampFilePath, Date.now())
        ]);
}
/**
 * 创建本地 repo 缓存
 */
function createIgnoreCacheRepo() {
    /*
    * 1. 判断 .cache 目录下是否存在 gitignore 仓库，没有则拉取资源
    * */
    const spinner = ora(`fetching git ignore repo`).start();

    return git()
        .silent(true)
        .clone(ignoreRepoSSHPath, repoFilePath)
        .then(() => spinner.succeed('clone succeed'))
        .catch(() => spinner.succeed('repo already exists'))
}

module.exports = postInstall;
