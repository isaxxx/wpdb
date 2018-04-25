const wpdb = require('../index');
const test = require('ava');

// test

test('read config file', (t) => {
	return wpdb({
		config: 'test/config.json'
	}, (config) => {
		// --locale=ja
		t.is(config.core.locale, 'ja');
	}, true);
});
