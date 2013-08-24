multifilter
===========

A jQuery plugin to filter a table based on multiple inputs

## Usage

Call the plugin on any input you want to track:

```javascript
$(document).ready(function() {
  $('.filter').multifilter()
})
```

Then with each input, add a data attribute for the HTML selector for the table:

```html
<input class="filter" data-target="table" name="name" placeholder="name">
```

As long as the name attribute matches up with something in the `<thead>`, it will filter the content in those columns in `<tbody>`.