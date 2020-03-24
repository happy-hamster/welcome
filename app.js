let animationConfig = {
  interval: 8000 // ms
}

let statusConfig = {
  yes: {
    class: 'yes',
    text: 'LOS',
    title: 'Fast voll'
  },
  no: {
    class: 'no',
    text: 'STOP',
    title: 'All Clear'
  }
}

// set initial status
let isFull = true
let isInitialRun = true

let updateStatusBadge = function (selectedStatus) {
  let badge = $('.status-badge')
  let node = $('.animation-inner')

  badge.remove()

  node.append('<div class="animated status-badge bounce ' + statusConfig[selectedStatus].class + '">' + statusConfig[selectedStatus].text + '</div>')

  isFull = !isFull
}

let updateStatusCapacity = function () {
  if (isFull) {
    let node = $('.status-capacity')

    $('.icon-person.delay-2s').addClass('hide')
    $('.icon-person.delay-3s').addClass('hide')

    $('.icon-person.delay-2s').remove()
    $('.icon-person.delay-3s').remove()

    node.append('<img class="icon-person animated delay-1s bounceIn hide" src="img/icon_person_outline.svg" />')
    node.append('<img class="icon-person animated delay-2s bounceIn hide" src="img/icon_person_outline.svg" />')

    $('.icon-person.delay-1s').removeClass('hide')
    $('.icon-person.delay-2s').removeClass('hide')

    isFull = false
    isInitialRun = false

    $('.status-title').text('Leer')

    updateStatusBadge('yes')
  }
}

$(document).on('ready', function () {

  if (isInitialRun) {
    setTimeout(function () {
      updateStatusCapacity()
    }, 5000)
  }
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}