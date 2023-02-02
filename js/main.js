$('#images-demo').slickLightbox({
  images: ['http://placekitten.com/1000/600', 'http://placekitten.com/1010/606', 'http://placekitten.com/1060/636']
});


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
