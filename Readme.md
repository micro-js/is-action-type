
# is-action-type

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if is standard action of specified type.

## Installation

    $ npm install @f/is-action-type

## Usage

```js
var isActionType = require('@f/is-action-type')

isActionType('foo', {type: 'foo', payload: 'bar'}) // => true
```

## API

### isActionType(type, action)

- `type` - type of action
- `action` - action to check type of

**Returns:** whether `action` is of type `type`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/is-action-type.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/is-action-type
[git-image]: https://img.shields.io/github/tag/micro-js/is-action-type.svg
[git-url]: https://github.com/micro-js/is-action-type
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/is-action-type.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/is-action-type
