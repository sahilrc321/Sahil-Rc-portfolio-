// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example function for form submission (if you add a contact form)
function handleFormSubmission(event) {
    event.preventDefault();
    // You can add your form handling logic here
    alert("Form submitted!"); // Placeholder for form submission logic
}

// Uncomment and modify if you add a form
// const form = document.querySelector('form');
// if (form) {
//     form.addEventListener('submit', handleFormSubmission);
// }

// Toggle mobile navigation menu (optional)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}
