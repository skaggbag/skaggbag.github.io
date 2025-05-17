// This script dynamically loads the navigation bar from an external HTML file
// and inserts it into the page. It also handles the active class for the current page.
// Load the navigation dynamically
fetch('scripts/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        // Add the event listener here, after nav is loaded
        const toggle = document.querySelector('.nav-toggle');
        const links = document.querySelector('.nav-links');
        if (toggle && links) {
            toggle.addEventListener('click', function() {
                links.classList.toggle('active');
            });
        }
    })
    .catch(error => console.error('Error loading navigation:', error));
