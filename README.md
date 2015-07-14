multifilter
===========

A jQuery plugin to filter a table based on multiple inputs. Check out the [demo](http://tommyp.github.io/multifilter/).

## Usage

Call the plugin on any input you want to track and tell it what to look for with a `data-col` attribute:

```javascript
$(document).ready(function() {
  $('.filter').multifilter();
});
```

If you have multiple tables on the same page and you want different sets of inputs for the different tables, you can pass a jQuery object for each instance for each table element.

```javascript
$(document).ready(function() {
  $('.main-filter').multifilter({
    'target': $('#main-table')
  });

  $('.alt-filter').multifilter({
    'target': $('#alt-table')
  });
});
```

As long as the `data-col` attribute matches up with something in the `<thead>`, it will filter the content in those columns in the table:

```html
<input class="filter" name="email" placeholder="email" data-col="email">
```

That's it!

Alternatively, if you prefer your tables without a `<thead>` you match up the column with a class on your `<td>` tags by doing:

```javascript
$(document).ready(function() {
  $('.main-filter').multifilter({
    'method': 'class'
  });
});
```
