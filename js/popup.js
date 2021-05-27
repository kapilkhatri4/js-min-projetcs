// popup
const subscribe = document.querySelector('.subsBtn');
const register = document.querySelector('.regsBtn');
const notifyBack = document.querySelector('.notify-pop');

const overlayPop = document.createElement('div');
const popUp = document.createElement('div');
const notifyTag = document.createElement('h3');
const notifySubTag = document.createElement('p');
const closeBtn = document.createElement('button');
const updateBtn = document.createElement('button');
const notifyImg = document.createElement('img');

function createPopup(e) {
  e.preventDefault();
  overlayPop.classList.add('overlayPop');
  overlayPop.style.display = 'flex';
  // popUp
  popUp.classList.add('popup');
  // closeBtn
  closeBtn.classList.add('closeBtn');
  closeBtn.innerHTML = `<i class="fas fa-times"></i>`;

  // img
  notifyImg.src = 'img/notify.png';
  notifyImg.style.width = '180px';
  notifyImg.style.height = '150px';

  // notifyTag
  notifyTag.style.fontSize = '1.5rem';
  notifyTag.style.color = '#19547b';

  // notifySubTag
  notifySubTag.style.fontSize = '1rem';
  notifySubTag.innerText = ` You Will Get Updates Click Below To Continue`;

  if (e.target.classList.contains('subsBtn')) {
    notifyTag.innerText = `Thank You For Subscribe !!`;
    notifyImg.src = 'img/popup/subs.jpg';
  }
  if (e.target.classList.contains('regsBtn')) {
    notifyTag.innerText = `Thank You For Register !!`;
    notifyImg.src = 'img/popup/register.jpg';
  }

  // update
  updateBtn.classList.add('updateBtn');
  updateBtn.innerText = 'Get Updates';
  updateBtn.style.width = '150px';
  updateBtn.style.borderRadius = 0;

  notifyBack.appendChild(overlayPop);
  overlayPop.appendChild(popUp);
  popUp.appendChild(closeBtn);
  popUp.appendChild(notifyImg);
  popUp.appendChild(notifyTag);
  popUp.appendChild(notifySubTag);
  popUp.appendChild(updateBtn);

  document.body.style.overflow = 'hidden';
}
updateBtn.addEventListener('click', function () {
  updateBtn.style.transition = 'all .3s ease';
  updateBtn.style.width = '50px';
  updateBtn.style.height = '50px';
  updateBtn.style.borderRadius = '100%';
  updateBtn.innerHTML = `<i class="fas fa-check"></i>`;
  notifyImg.src = 'img/popup/update.jpg';
});

subscribe.addEventListener('click', createPopup);
register.addEventListener('click', createPopup);

closeBtn.addEventListener('click', function () {
  overlayPop.style.display = 'none';
  document.body.style.overflowY = 'scroll';
});
