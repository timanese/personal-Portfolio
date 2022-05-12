// Menu show y hidden 

// Get elements for navigation
const navMenu = document.getElementById('nav-menu');
// nav toggle is the icon that shows the nav menu on smaller devices
const navToggle  = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show Menu
// check to see if element / constant exist
if (navToggle)
{
  navToggle.addEventListener('click', () => {
    // add a class to show the menu
    navMenu.classList.add('show-menu');
  });
}

// Close menu on smaller screens 
if (navClose)
{
  // remove the class that shows the menu
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}


// Remove menu (mobile) - Closes the mobile nav bar after a selection is made 
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove trhe show menu class
  navMenu.classList.remove('show-menu');
}

// navLink.forEach(n => n.addEventListener('click', linkAction));
 
for (let i = 0; i < navLink.length; i++)
{

  navLink[i].addEventListener('click', linkAction);
}