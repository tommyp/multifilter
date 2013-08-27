(function($) {
  $.fn.multifilter = function(options) {
    var settings = $.extend( {
      'target'        : $('table')
    }, options);

    jQuery.expr[":"].Contains = function(a, i, m) {
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    this.each(function() {
      var $this = $(this);
      container = settings.target
      row_tag = 'tr';
      item_tag = 'td'
      rows = container.find($('tbody ' + row_tag))

      var col = container.find('th:Contains(' + $this.attr('name') + ')');
      var col_index = container.find($('thead th')).index(col); 
      $this.change(function() {
        input = $this
        filter = $this.val();
        rows.each(function() {
          hidden_rows = []
          visible_rows = []
          row = $(this);
          cell = $(row.children(item_tag)[col_index])
          if (filter) {
            if (cell.text().toLowerCase().indexOf(filter.toLowerCase()) != -1) {
              cell.attr('data-filtered', 'positive');
            } else {
              cell.attr('data-filtered', 'negative');
            }
            if (row.find(item_tag + "[data-filtered=negative]").size() > 0) {
               row.hide();
            } else {
              if (row.find(item_tag + "[data-filtered=positive]").size() > 0) {
                row.show();
              }
            }
          } else {
            cell.attr('data-filtered', 'positive');
            if (row.find(item_tag + "[data-filtered=negative]").size() > 0) {
              row.hide();
            } else {
              if (row.find(item_tag + "[data-filtered=positive]").size() > 0) {
                row.show();
              }
            }
          }
        })
        return false;
      }).keyup(function() {
        $this.change();
      });
    });
  };
})(jQuery);(jQuery);