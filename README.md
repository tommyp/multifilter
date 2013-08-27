multifilter
===========

A jQuery plugin to filter a table based on multiple inputs. Check out the [demo](http://tommyp.github.io/multifilter/).

## Usage

Call the plugin on any input you want to track:

```javascript
$(document).ready(function() {
  $('.filter').multifilter()
})
```

If you have multiple tables on the same page, you can pass a jQuery object for the table element

```javascript
$(document).ready(function() {
  $('.filter').multifilter({
    'target' : $('#my-table')
  })
})
```

As long as the name attribute matches up with something in the `<thead>`, it will filter the content in those columns in `<tbody>`:

```html
<input class="filter" name="email" placeholder="email">
```

That's it!