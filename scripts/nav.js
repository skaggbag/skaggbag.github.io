// This script dynamically loads the navigation bar from an external HTML file
// and inserts it into the page. It also handles the active class for the current page.
// Load the navigation dynamically
fetch('scripts/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading navigation:', error));
