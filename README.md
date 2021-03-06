# HTML5 Fetch Polyfill for [Wakanda](http://wakanda.org)

![Fetch Icon](./icons/logo_fetch.png) 

The `Fetch` "custom widget" Polyfill HTML5 Fetch API in Wakanda Pages using the Github [Fetch](https://github.com/github/fetch) library.

## Why Fetch

Fetch is a new generation of XMLHttpRequest based on the ECMAScript 2015 *Promise* API

## How to Install

You can install the `Fetch` widget by using the [Add-ons Extension](http://doc.wakanda.org/WakandaStudio/help/Title/en/page4263.html "Add-ons Extension"). 

For more information, refer to the [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio/help/Title/en/page3869.html#1056003 "Installing a Custom Widget") manual.

## How to Use

Here 2 very simple example from the library documentation:
```javascript
// get some JSON data
fetch('/users.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  });

// post a form
var form = document.querySelector('form')

fetch('/query', {
  method: 'post',
  body: new FormData(form)
})
```

### Initialisation

1. Drag & drop the `Fetch` widget on your Wakanda Page. It will automatically Promisify the supported Wakanda Framework APIs.
2. Or define it as an external widget in from another custom widget package.json file



## References

### Standard

* [WHATWG Fetch Specification](https://fetch.spec.whatwg.org/)

## About Wakanda Custom Widgets

For more information about creating a custom widget, refer to the [Widgets v2 Creating a Widget](http://doc.wakanda.org/Wakanda/help/Title/en/page3849.html "Widgets v2 Creating a Widget") manual.


## License

Copyright 2015 Alexandre Morgaut

MIT License, as for the original [Github Fetch Polyfill](https://github.com/github/fetch/blob/master/LICENSE) it is based on
