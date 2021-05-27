////tabs/////
const tabBtn = document.querySelectorAll('.tab__btn__items');
const tabContainer = document.querySelector('.tab-container');
const tabContent = document.querySelectorAll('.content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.tab__btn__items');
  if (!clicked) return;

  tabBtn.forEach(e => {
    e.classList.remove('btn-active');
  });
  tabContent.forEach(item => {
    item.classList.remove('tab-active');
  });
  clicked.classList.add('btn-active');
  document
    .querySelector(`.content-${clicked.dataset.button}`)
    .classList.add('tab-active');
});
