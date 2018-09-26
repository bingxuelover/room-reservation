$(function() {/* 会议室 悬浮提示详情 IE 7 */
  $('.room-table-preview tbody').on('mouseenter', '.time-pick-box', function() {
    $(this).on('mouseenter', function(event) {
      $(this).children('.room-info').clone().css({
        'left': event.currentTarget.offsetLeft,
        'top': event.currentTarget.offsetTop + 60
      }).appendTo('.page-article-room');
    }).on('mouseleave', function() {
      $('.page-article-room').children('.room-info').remove();
    })
  })
})
