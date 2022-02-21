


//Airtable Credentials
// var Airtable = require('airtable');
// var base = new Airtable({apiKey: ''}).base('appb2lxHLQHKIk9iv');

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

// base('Deliverables').select({
//     // Selecting the first 3 records in New & Flagged:
//     maxRecords: 3,
//     view: "New & Flagged"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Name'));
//     });
//
//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();
//
// }, function done(err) {
//     if (err) { console.error(err); return; }
// });
