// nav-toggle
const navToggler = document.querySelector('.nav-btn');
const toggleMenu = document.querySelector('.toggle-nav');

document.addEventListener('click', function (e) {
  const navClicked = e.target.closest('.nav-btn');

  if (navClicked) {
    toggleMenu.classList.toggle('show-menu');
  }
  if (!navClicked) {
    toggleMenu.classList.remove('show-menu');
  }
});


