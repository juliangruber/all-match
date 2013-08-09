
/**
 * Module dependencies.
 */

var match = require('./');

/**
 * Should match.
 */

console.log('match: %s', match('bar', ['baro']));
console.log('match: %s', match('foo', ['foo', 'baro']));
console.log('match: %s', match('foo bar', ['foo', 'baro']));

/**
 * Shouldn't match.
 */

console.log('no match: %s', match('bare', ['baro']));
console.log('no match: %s', match('fop', ['foo', 'baro']));
console.log('no match: %s', match('foo baz', ['foo', 'baro']));
