ignore-add -- .gitignore creator
===
[![NPM version][npm-image]][npm-url]

`ignore-add` can help you add .gitignore file from [gitignore](https://github.com/github/gitignore) into your project

## Install

```
$ npm install -g ignore-add
```

## Example
```
$ ignore-add add

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
$ ignore-add update
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

## Contributing
If you're interested in this project, please get in touch!

## LICENSE
MIT

[npm-image]: https://img.shields.io/npm/v/ignore-add.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ignore-add
