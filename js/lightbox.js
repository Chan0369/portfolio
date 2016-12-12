$(function () {
  $('.lightbox-click').mouseup(function (e) {
    alert('yolo');
  });
  
  $('.lightbox-click').bind('touchstart click', function (e) {
    alert('Hello!');
    $('#' + $(e.target).data('name')).toggleClass('active');

    $('#' + $(e.target).data('name')).bind('touchstart click', function (e) {
      $(this).removeClass('active');
      $('html').removeClass('no-scroll');
    });
  });
});
