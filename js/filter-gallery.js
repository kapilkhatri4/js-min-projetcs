// filter gallery
const filterBtn = document.querySelectorAll('.filter-btn');
const filterImg = document.querySelectorAll('.grid-gallery-item');

filterBtn.forEach(function (i) {
  i.addEventListener('click', function () {
    let targetData = this.getAttribute('data-filter');
    filterImg.forEach(function (k) {
      k.classList.remove('filter-active');
      k.classList.add('filter-hide');

      if (k.getAttribute('data-item') == targetData || targetData == 'all') {
        k.classList.add('filter-active');
        k.classList.remove('filter-hide');
      }
    });
  });
});
filterImg.forEach(img => {
  img.addEventListener('click', function (e) {
    const getImg = this.getAttribute('src');
    console.log(getImg);
    const modalBox = document.querySelector('.imgoverlay');
    const imgOverlay = document.querySelector('.overlay-img');
    modalBox.style.visibility = 'visible';
    modalBox.style.transform = 'scale(1)';
    document.body.style.overflowY = 'hidden';

    imgOverlay.src = getImg;
    modalBox.addEventListener('click', function () {
      this.style.visibility = 'hidden';
      this.style.transform = 'scale(0)';
      document.body.style.overflowY = 'scroll';
    });
  });
});
