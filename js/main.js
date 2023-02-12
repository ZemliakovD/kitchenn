$(function(){
  $('.products-slider').slick({
      responsive: [
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
            arrows: false,
            autoplay: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      prevArrow: '<button class="slick-prew products-slider-arrow"></button>',
      nextArrow: '<button class="slick-next products-slider-arrow"></button>'
});
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000); // for endless timer
// var deadline="May 20 2023 00:00:00 GMT+0300";
initializeClock('countdown', deadline);



// Главная страница вкладка "Кухни"

$('#kuh-1').slickLightbox({
  images: ['https://i.ibb.co/5v4Ztxy/2.jpg', 'https://i.ibb.co/rwXj5wz/3.jpg', 'https://i.ibb.co/bbZxwt7/4.jpg'],
});

$('#kuh-2').slickLightbox({
  images: ['https://i.ibb.co/6BWV60F/2.jpg', 'https://i.ibb.co/7ndgzqN/3.jpg', 'https://i.ibb.co/VBXyBc7/4.jpg'],
});

$('#kuh-3').slickLightbox({
  images: ['https://i.ibb.co/kyt3VcF/2.jpg', 'https://i.ibb.co/jy5fHFB/3.jpg', 'https://i.ibb.co/25vtq5p/4.jpg'],
});

$('#kuh-4').slickLightbox({
  images: ['https://i.ibb.co/DMH68mS/2.jpg', 'https://i.ibb.co/LCpCmT6/3.jpg', 'https://i.ibb.co/LtBSph4/4.jpg'],
});

$('#kuh-5').slickLightbox({
  images: ['https://i.ibb.co/Nj3MtX6/2.jpg', 'https://i.ibb.co/Q98fbWS/3.jpg', 'https://i.ibb.co/thqky5d/4.jpg'],
});

$('#kuh-6').slickLightbox({
  images: ['https://i.ibb.co/YhwvfJG/2.jpg', 'https://i.ibb.co/pznzmgJ/3.jpg', 'https://i.ibb.co/PDg6vHy/4.jpg'],
});

// Главная страница вкладка "Фасады"

$('#fasad-1').slickLightbox({
  images: ['', '', ''],
});

$('#fasad-2').slickLightbox({
  images: ['', '', ''],
});


$('#fasad-3').slickLightbox({
  images: ['', '', ''],
});


$('#fasad-4').slickLightbox({
  images: ['', '', ''],
});


$('#fasad-5').slickLightbox({
  images: ['', '', ''],
});


$('#fasad-6').slickLightbox({
  images: ['', '', ''],
});

// Главная страница вкладка "Шкафы"

$('#shkaf-1').slickLightbox({
  images: ['', '', ''],
});

$('#shkaf-2').slickLightbox({
  images: ['', '', ''],
});

$('#shkaf-3').slickLightbox({
  images: ['', '', ''],
});

$('#shkaf-4').slickLightbox({
  images: ['', '', ''],
});

$('#shkaf-5').slickLightbox({
  images: ['', '', ''],
});

$('#shkaf-6').slickLightbox({
  images: ['', '', ''],
});