const test = require('ava');
const rimraf = require('rimraf');
const wpdb = require('../index');

test('init task', (t) => {
  return new Promise((resolve) => {
    rimraf('./docker/', () => {
      resolve();
    });
  }).then(() => {
    return new Promise((resolve) => {
      rimraf('./docker-compose.yml', () => {
        resolve();
      });
    });
  }).then(() => {
    return new Promise((resolve) => {
      rimraf('./mysql/', () => {
        resolve();
      });
    });
  }).then(() => {
    return new Promise((resolve) => {
      rimraf('./wp/', () => {
        resolve();
      });
    });
  }).then(() => {
    return wpdb();
  }).then(() => {
    t.pass();
  });
});
