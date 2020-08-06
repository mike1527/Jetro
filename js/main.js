$(function () {
   $('.slider').slick({
      asNavFor: '.thumbs',
      nextArrow: '<button class="slick-arrow slick-slider-next"><img src="images/slider/next.svg" alt="next arrow"></button>',
      prevArrow: '<button class="slick-arrow slick-slider-prev"><img src="images/slider/prev.svg" alt="prev arrow"></button>'
   });


   $('.thumbs').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider',
      focusOnSelect: true,

      responsive: [
         {
            breakpoint: 960,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 1
            }
         },
      ]
   });


   $('.header__menu-btn').on('click', function () {
      $('.header__wrapper ul').slideToggle();
   });

}); 