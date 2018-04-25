/**
 *
 * command line
 * @return {object} config object
 *
 */

module.exports = require('yargs').usage('wpdb [options]')
.option('config', {
    alias: 'c',
    default: 'src/wpdb/config.json',
    type: 'string',
    describe: 'config json file path.',
    demandOption: true
})
.option('import', {
    default: false,
    type: 'bool',
    describe: 'import sql file path.'
})
.option('export', {
    default: false,
    type: 'bool',
    describe: 'export sql file path.'
})
.option('install', {
    default: false,
    type: 'bool',
    describe: 'install WordPress.'
})
.version()
.help('help')
.alias('version', 'v')
.alias('help', 'h')
.argv;
