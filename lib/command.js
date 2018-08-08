/**
 *
 * Command
 * @return {object}
 *
 */

module.exports = require('yargs').usage('wpdb [options]').version().help('help').alias('version', 'v').alias('help', 'h').argv;
