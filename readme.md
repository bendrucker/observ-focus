# observ-focus [![Build Status](https://travis-ci.org/bendrucker/observ-focus.svg?branch=master)](https://travis-ci.org/bendrucker/observ-focus) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-focus.svg)](https://greenkeeper.io/)

> Observable interface to window focus/blur state


## Install

```
$ npm install --save observ-focus
```


## Usage

```js
var focus = require('observ-focus')

focus()
//=> true/false

focus(function onFocus (focused) {
  //=> true/false  
})
```

## API

#### `focus([callback])` -> `boolean` / `function`

Returns the current focus state when the `callback` is omitted. If a callback is provided, an `unlisten` function is returned.

##### callback

*Required*  
Type: `callback`

A callback called with the `window`'s focus state whenever it changes.


## License

MIT © [Ben Drucker](http://bendrucker.me)
