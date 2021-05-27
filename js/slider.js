// sliders
const slider = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const slideImgPath = [
  'img/slider/jungle.jpg',
  'img/slider/ice.jpg',
  'img/slider/sea.jpg',
  'img/slider/greenmount.jpg',
];

let newCounter = 0;

slideImg[0].src = slideImgPath[newCounter];

// next
function nextImg() {
  if (slideImgPath.length - 1 > newCounter) {
    newCounter++;
    slideImg[0].src =
      slideImgPath[newCounter];
  } else {
    newCounter = 0;
    slideImg[0].src =
      slideImgPath[newCounter];
  }
  slider.classList.add('slider-active');
}
next.addEventListener('click', nextImg);
setInterval(() => {
  nextImg();
}, 3000);

prev.addEventListener('click', () => {
  if (newCounter >= 1) {
    newCounter--;
    slideImg[0].src =
      slideImgPath[newCounter];
  } else {
    newCounter = 3;
    slideImg[0].src =
      slideImgPath[newCounter];
  }

});


