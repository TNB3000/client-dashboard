

// Menu Logic
const navLinks = document.getElementsByClassName("nav-item");
const navIcons = document.getElementsByClassName("menu-icon");

function addActiveClass() {
  const links = document.getElementsByClassName('nav-item');
  const currentUrl = location.href;
  for (const link of links) {
      if (link.children[1].href === currentUrl) {
          link.classList.toggle('active')
      }
  }
}

addActiveClass()
