


//Airtable Credentials
// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keyYnLHWVlLVtnMMC'}).base('appb2lxHLQHKIk9iv');

// Menu Logic
const navLinks = document.getElementsByClassName("nav-item");
console.log(navLinks)

const svgNames = ['0_target', '1_package', '2_dollar-sign', '3_trending-up']
console.log(svgNames[1])

function addNavIcons() {
  for (let i = 0; i < navLinks.length; i++) {
    let icon = document.createElement("img");
    icon.src = `/img/menuicons/${svgNames[i]}.svg`;
    navLinks[i].prepend(icon)
  }
}

function addActiveClass() {
  const links = document.getElementsByClassName('nav-link')
  const currentUrl = location.href
  for (const link of links) {
      if (link.href === currentUrl) {
          link.classList.add('active')
      }
  }
}

addNavIcons()
addActiveClass()
