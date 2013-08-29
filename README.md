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

If you have multiple tables on the same page and you want different sets of inputs for the different tables, you can pass a jQuery object for to each instance for each table element.

```javascript
$(document).ready(function() {
  $('.main-filter').multifilter({
    'target' : $('#main-table')
  })
  
  $('.alt-filter').multifilter({
    'target' : $('#alt-table')
  })
})
```

As long as the name attribute matches up with something in the `<thead>`, it will filter the content in those columns in `<tbody>`:

```html
<input class="filter" name="email" placeholder="email">
```

That's it!
