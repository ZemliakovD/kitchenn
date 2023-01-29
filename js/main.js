$(function(){
    $('.products-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
      });
});

let isVisible = true;
const div = document.getElementById('ts1');

function trigger() {
  isVisible = !isVisible;
  div.style.display = isVisible ? "block" : "none";
};

document
  .getElementById('push')
  .addEventListener('click', trigger);