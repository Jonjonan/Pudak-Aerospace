const windowPathname = window.location.pathname;

const navLinkEls = document.querySelectorAll('.nav__link');

navLinkEls.forEach((navLink) => {
  const navLinkPathname = new URL (navLink.href).pathname;
  if (
    navLinkPathname ===
    windowPathname ||
    (navLinkPathname == '/' && windowPathname == '/landing.html')
   ) {
    navLink.classList.add('active');
  }
});



var lastScrollTop = 0;
var header = document.getElementById('header');

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the header
    header.style.top = '-120px'; // Adjust this value as needed (height of your header)
  } else {
    // Scrolling up, show the header
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
});
