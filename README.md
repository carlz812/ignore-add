ignore-add -- .gitignore creator
===


`ignore-add` can help you add .gitignore file from [gitignore](https://github.com/github/gitignore) into your project


## Install

```
$ npm install -g nrm
```

## Example
```
$ nrm add

* ? What kind of boilerplate do you want? (Use arrow keys or type to search)
  ❯ Actionscript.gitignore
    Ada.gitignore
    Agda.gitignore
    Android.gitignore
    AppceleratorTitanium.gitignore
    AppEngine.gitignore
    ArchLinuxPackages.gitignore
    Autotools.gitignore
    C.gitignore
    C++.gitignore
    CakePHP.gitignore
    CFWheels.gitignore
    ChefCookbook.gitignore
    Clojure.gitignore
    CMake.gitignore
```


if you want to update local cached gitignore repo, you can: 
```
$ nrm update
```
## Usage

```
Usage: ignore-add [options] [command]

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  postInstall    List all the .gitignore template
  add            create specific git ignore type to current project
  update         update git ignore file content from remote
  help           Print this help
```

## TODO 

see TODO.md

## Contributors 

* [carlz](https://github.com/carlz812)

## LICENSE
MIT


[npm-image]: https://img.shields.io/npm/v/nrm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nrm
