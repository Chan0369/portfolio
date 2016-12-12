$(function () {
  $('.lightbox-click').bind('click touchstart', function (e) {
    console.log('Hello!');
    $('#' + $(e.target).data('name')).toggleClass('active');

    $('#' + $(e.target).data('name')).bind('click touchstart', function (e) {
      $(this).removeClass('active');
      $('html').removeClass('no-scroll');
    });
  });
});
