
/**
 * Module dependencies.
 */

var match = require('./');
var test = require('tape');

test('uppercase', function (t) {
  t.ok(match('Foo', ['foo']));
  t.ok(match('foo', ['Foo']));
  t.end();
});

test('substring', function (t) {
  t.ok(match('bar', ['baro']));
  t.ok(match('bar', ['obar']));
  t.ok(match('bar', ['obaro']));
  t.end();
});

test('single', function (t) {
  t.ok(match('foo', ['foo', 'baro']));
  t.notOk(match('bare', ['obaro']));
  t.end();
});

test('multiple', function (t) {
  t.ok(match('foo bar', ['foo', 'obaro']));
  t.notOk(match('fop', ['foo', 'obaro']));
  t.notOk(match('foo baz', ['foo', 'obaro']));
  t.end();
});
