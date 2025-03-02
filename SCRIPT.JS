



 // Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar'); // Corrected variable name

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Use 'navbar' here
});
