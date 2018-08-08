# wpdb

Tools for Handling WordPress Database by Docker and WP-CLI.

[![NPM](https://nodei.co/npm/wpdb.png)](https://nodei.co/npm/wpdb/)
[![Build Status](https://travis-ci.org/isaxxx/wpdb.svg?branch=master)](https://travis-ci.org/isaxxx/wpdb)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Installation

### NPM

You must install [Docker](https://www.docker.com/) for this module to work.

```bash
$ npm install wpdb --save
```

## Usage

### CLI

```
Options:
  --version, -v   show this version. [boolean]
  --help, -h      show this help. [boolean]
```

#### Initialize

Install the Docker files.

```bash
$ wpdb
```

#### Start

Start Docker.

```bash
$ docker-compose up -d
```

#### Stop

Stop Docker.

```bash
$ docker-compose down -v
```

#### Import

Import the SQL file.

```bash
$ docker-compose exec wordpress wp db import /var/lib/mysql/import.sql --allow-root
```

#### Export

Export the SQL file.

```bash
$ docker-compose exec wordpress wp db export /var/lib/mysql/export.sql --allow-root
```

#### Replace

##### Import

```bash
$ docker-compose exec wordpress wp db import /var/lib/mysql/import.sql --allow-root
$ docker-compose exec wordpress wp search-replace http://example.com http://localhost:8000 --allow-root
```

##### Export

```bash
$ docker-compose exec wordpress wp search-replace http://localhost:8000 http://example.com --allow-root
$ docker-compose exec wordpress wp db export /var/lib/mysql/export.sql --allow-root
$ docker-compose exec wordpress wp search-replace http://example.com http://localhost:8000 --allow-root
```

### JavaScript

```js
wpdb().then(() => {
  console.log('Complete!!');
});
```

### Access

* WordPress

[http://localhost:8000/](http://localhost:8000/)

* phpMyAdmin

[http://localhost:8080/](http://localhost:8080/)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
