/**
 *
 * Exec
 * @param {object} param
 * @return {promise}
 *
 */

const chalk = require('chalk');
const cpx = require('cpx');
const fs = require('fs');
const path = require('path');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const defaultParam = require('./command');

module.exports = (param) => {
  return new Promise((resolve) => {
    updateNotifier({pkg}).notify();
    param = Object.assign(defaultParam, param);
    resolve();
  }).then(() => {
    return new Promise((resolve, reject) => {
      fs.access('./docker/', (err) => {
        if (err) {
          if (err.code === 'ENOENT') {
            resolve();
          } else {
            reject(err);
          }
        } else {
          reject('Error: docker directory exist');
        }
      });
    }).then(() => {
      return new Promise((resolve, reject) => {
        cpx.copy(path.resolve(__dirname, './templates/') + '/**/{*,.*}', './', (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    });
  }).catch((err) => {
    console.error(chalk.red(err));
  });
};
