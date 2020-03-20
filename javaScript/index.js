$(document).ready(function () {
  $('.nav__item_menu').click(function (e) { 
    e.preventDefault();
    $('.carte').slideToggle("slow");
  });

  $('.mobile__menuBtn').click(function (e) { 
    $('.mobile__menuBtn').toggleClass('active');
    $('.mobile__menu').fadeToggle();
  });
});