# wpdb

Simple WordPress database CLI tool by WP-CLI.

[![NPM](https://nodei.co/npm/wpdb.png)](https://nodei.co/npm/wpdb/)
[![Build Status](https://travis-ci.org/isaxxx/wpdb.svg?branch=master)](https://travis-ci.org/isaxxx/wpdb)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Installation

### npm

You must install wp-cli for this plugin to work. Please refer to http://wp-cli.org/ for information on getting started.

```bash
$ npm install wpdb -g
```

## Usage

```
Options:
  --config, -c    config json file path. [string] [require] [default: "src/wpdb/config.json"]
  --import        import sql file path. [boolean] [default: false]
  --export        export sql file path. [boolean] [default: false]
  --install       install WordPress. [boolean] [default: false]
  --version, -v   show this version. [boolean]
  --help, -h      show this help. [boolean]
```

## Example

##### import database

```bash
$ wpdb --import
```

##### export database

```bash
$ wpdb --export
```

##### install WordPress

```bash
$ wpdb --install
```

##### src/wpdb/config.json

```json
{
  "core": {
    "locale": "locale here"
  },
  "domain": {
    "local": "local domain here",
    "remote": "remote domain here"
  },
  "db": {
    "name": "database name",
    "user": "database username",
    "password": "database password",
    "host": "localhost",
    "prefix": "wp_",
    "import": "import sql file path",
    "export": "export directory path"
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
