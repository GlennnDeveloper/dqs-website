// Header Scroll Effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for Reveal Animations
const revealElements = document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right, .reveal-scale',
);

const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
};

const revealOptions = {
    threshold: 0.15, // Trigger when 15% of element is visible
    rootMargin: '0px 0px -50px 0px',
};

const revealObserver = new IntersectionObserver(
    revealCallback,
    revealOptions,
);

revealElements.forEach((el) => revealObserver.observe(el));

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Change icon based on state
    if (navMenu.classList.contains('active')) {
        menuToggle.classList.replace('fa-bars', 'fa-times');
    } else {
        menuToggle.classList.replace('fa-times', 'fa-bars');
    }
});

// Close menu when clicking a link
navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.replace('fa-times', 'fa-bars');
    });
});
