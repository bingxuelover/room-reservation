$(function() {
  /* room隔列换border IE8- */
  $('.room-table-preview tbody tr td:first-child').addClass('first');
  $('.room-table-preview tbody tr').each(function() {
    $(this).children('td').each(function(i) {
      if ((i % 2) !== 0) {
        $(this).addClass('even');
      } else {
        $(this).addClass('odd');
      }
    })
  })
})
