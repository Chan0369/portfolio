$(function () {
  $('.lightbox-click').bind('touchstart click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('html').addClass('no-scroll');
    var lightbox = $('#' + $(e.target).data('name')).toggleClass('active');

    var close = function() {
      lightbox.removeClass('active');
    };

    $('#' + $(e.target).data('name') + '.close').bind('touchstart click', function (e) {
      close();
      $('html').removeClass('no-scroll');
    });
  });
});
