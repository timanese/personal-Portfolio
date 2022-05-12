// Menu show y hidden 

// Get elements for navigation
const navMenu = document.getElementById('nav-menu');
const navToggle  = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show Menu
if (navToggle)
{
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  });
}