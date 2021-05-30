window.onload = () => {
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
};
