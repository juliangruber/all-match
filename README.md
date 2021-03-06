
# all-match

Check if a querystring's words each match at least one field.

[![testling badge](https://ci.testling.com/juliangruber/all-match.png)](https://ci.testling.com/juliangruber/all-match)

[![build status](https://secure.travis-ci.org/juliangruber/all-match.png)](http://travis-ci.org/juliangruber/all-match)

## Example

```js
var match = require('all-match');

// case insensitive
match('foo', ['foo']); // => true
match('foo', ['Foo']); // => true
match('Foo', ['foo']); // => true

// substrings
match('foo', ['ofooo']); // => true

// multiple fields
match('foo', ['foo', 'bar']); // => true
match('foo bar', ['foo', 'bar']); // => true
match('foo baz', ['foo', 'bar']); // => false
```

## API

### match(query, fields)

Check if a `query`'s words each match at least one string in `fields`.
Be case insensitive and accept substring matches.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install all-match
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
