$(function() {
  /* 会议室预览 */
  $('.room-table-preview tbody tr').selectable({
    filter: 'td:not(:first-child)',
    start: function() {
      $(this).siblings('tr').find('.ui-selected').removeClass('ui-selected');
    },
    stop: function() {
      var startTimes = [],
        endTimes = [],
        hasTime = 0,
        title = "",
        start = "",
        end = "";
      $(".ui-selected", this).each(function(i, elm) {
        if ($(elm).is('td')) {
          if ($(elm).find('i').length > 0) {
            hasTime = 1;
            return false;
          }
          hasTime = 2;
          var stime = $(elm).attr('data-start');
          var etime = $(elm).attr('data-end');
          startTimes.push(stime);
          endTimes.push(etime)
        }
      });
      if (hasTime == 2) {
        title = '会议室名称：名称';
        start = '开始时间：' + startTimes[0];
        end = '结束时间：' + endTimes[endTimes.length - 1];
      } else if (hasTime == 1) {
        title = '不能选择已经预约的时间';
        $(".ui-selected", this).removeClass('ui-selected')
      }
      $('#result-title').text(title);
      $('#result-start').text(start);
      $('#result-end').text(end);
    }
  })
  // /*预览页面的会议室名称悬浮显示*/
  $('.room-table-preview tr > td:first-child > a').tooltip({
    tooltipClass: "ui-tooltip-room",
    show: false,
    hide: false,
    position: {
      my: "left center",
      at: "right center"
    }
  })
})
