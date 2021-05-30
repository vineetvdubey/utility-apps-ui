const openTab = (event, appName) => {
  // Get all elements with class="tabcontent" and hide them
  document.querySelectorAll('.tabcontent').forEach((elem) => {
    elem.style.display = 'none';
  });

  // Get all elements with class="tablinks" and remove the class "active"
  document.querySelectorAll('.tablinks').forEach((elem) => {
    elem.classList.remove('active');
  });

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(appName).style.display = 'block';
  event.currentTarget.classList.add('active');
};

document.querySelector('#defaultOpen').click();

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const mobileMenu = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

const closeMenu = () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
};

navLink.forEach((n) => n.addEventListener('click', closeMenu));
