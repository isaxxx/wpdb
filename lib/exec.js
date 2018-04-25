const shell = require('shelljs');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const readOptionsFile = require('./util/readOptionsFile');
const defaultParam = require('./command');
require('date-utils');

/**
 *
 * exec
 * @param {object} param    param object
 * @param {function}        callback
 *
 */

module.exports = (param, callback) => {
    param = Object.assign({}, defaultParam, param);
    return new Promise((resolve, reject) => {
        updateNotifier({pkg}).notify();
        readOptionsFile(param.config, (config) => {
            resolve(config);
        });
    })
    .then((config) => {
        // pre process
        return new Promise((resolve, reject) => {
            if (!shell.which('wp')) {
                console.error(chalk.red('This tool requires WP-CLI. Please install WP-CLI from "https://wp-cli.org"'));
                shell.exit(1);
            } else {
                mkdirp('wordpress', (err) => {
                    if (!err) {
                        shell.cd('wordpress');
                        resolve(config);
                    } else {
                        console.error(chalk.red(err));
                    }
                });
            }
        });
    })
    .then((config) => {
        if (param.import) {
            // import
            shell.exec('wp db import ../' + config.db.import);
            shell.exec('wp search-replace ' + config.domain.remote + ' ' + config.domain.local);
        } else if (param.export) {
            // export
            let dt = new Date(),
                formatted = dt.toFormat("YYYYMMDDHH24MISS");
            mkdirp('../' + config.db.export, (err) => {
                if (!err) {
                    shell.exec('wp search-replace ' + config.domain.local + ' ' + config.domain.remote);
                    shell.exec('wp db export ../' + config.db.export + '/' + formatted + '.sql');
                    shell.exec('wp search-replace ' + config.domain.remote + ' ' + config.domain.local);
                } else {
                    console.error(chalk.red(err));
                }
            });
        } else if (param.install) {
            // install
            let locale = '',
                version = '',
                dbName = '',
                dbUser = '',
                dbPassword = '',
                dbHost = '',
                dbPrefix = '';
            if ( config.core.locale ) {
                locale = ' --locale=' + config.core.locale;
            }
            if ( config.core.version ) {
                version = ' --version=' + config.core.version;
            }
            // install wordpress core
            shell.exec('wp core download' + locale + version);
            if ( config.db.name ) {
                dbName = ' --dbname=' + config.db.name;
            }
            if ( config.db.user ) {
                dbUser = ' --dbuser=' + config.db.user;
            }
            if ( config.db.password ) {
                dbPassword = ' --dbpass=' + config.db.password;
            }
            if ( config.db.host ) {
                dbHost = ' --dbhost=' + config.db.host;
            }
            if ( config.db.prefix ) {
                dbPrefix = ' --dbprefix=' + config.db.prefix;
            }
            // fix wp-config.php
            shell.exec('wp core config' + dbName + dbUser + dbPassword + dbHost + dbPrefix);
            // db create
            shell.exec('wp db create');
        }
        if (callback) {
            callback(config);
        }
    });
};
