// script.js

// Function to load HTML into a specific element
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            // After loading header, update the active link based on the current page
            if (elementId === 'header') {
                setActiveNavLink();
            }
        })
        .catch(error => console.error('Error loading ' + url + ':', error));
}

// Function to set the active navigation link
function setActiveNavLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        } else if (page === "" && link.getAttribute('href') === "index.html") {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Load Header and Footer
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // You can add more complex validation or AJAX submission here

            alert('Thank you for your message! We will get back to you soon.');

            // Reset the form
            contactForm.reset();
        });
    }

    // Booking Form Validation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('booking-name').value.trim();
            const email = document.getElementById('booking-email').value.trim();
            const date = document.getElementById('booking-date').value;
            const ticketType = document.getElementById('ticket-type').value;

            if (name === '' || email === '' || date === '' || ticketType === '') {
                alert('Please fill in all fields.');
                return;
            }

            // You can add more complex validation or AJAX submission here

            alert('Thank you for your booking! We will confirm your reservation soon.');

            // Reset the form
            bookingForm.reset();
        });
    }

    // Mobile Menu Toggle
    const menu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (menu) {
        menu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});
