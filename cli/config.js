const path = require('path');

const ignoreRepoSSHPath = 'git@github.com:github/gitignore.git';

const localCachePath = path.resolve(__dirname, '../', '.cache');

const repoName = '.gitignore-repo';
const repoFilePath = `${localCachePath}/${repoName}`;
const timestampFileName = '.timestamp';
const timestampFilePath = `${localCachePath}/${timestampFileName}`;
const UpdateGapTime = 7 * 24 * 60 * 60 * 1000;

module.exports = {
    ignoreRepoSSHPath,
    localCachePath,
    repoName,
    repoFilePath,
    timestampFileName,
    timestampFilePath,
    UpdateGapTime,
};
