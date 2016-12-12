$(function () {
  $('body').scroll(function (e) {
      e.preventDefault();
      e.stopPropagation();
  });
  
  $('.lightbox-click').bind('touchstart click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#' + $(e.target).data('name')).toggleClass('active');

    $('#' + $(e.target).data('name')).bind('touchstart click', function (e) {
      $(this).removeClass('active');
      $('html').removeClass('no-scroll');
    });
  });
});
