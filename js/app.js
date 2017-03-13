$(function () {
  var swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 15,
    autoHeight: true,
    mousewheelControl: true,
    slidesPerView: 'auto'
  });

  console.log(swiper);
  window.swiper = swiper;
});