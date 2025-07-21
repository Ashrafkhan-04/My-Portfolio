document.addEventListener('DOMContentLoaded', function() {
    // --- AOS (Animate On Scroll) Initialization ---
    AOS.init({
        duration: 1000, // Animation duration in milliseconds (0 to 3000, step 50ms)
        easing: 'ease-out-quad', // Easing function for the animation
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false, // Whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // Defines which position of the element should trigger the animation
    });

    // --- Smooth Scroll for Internal Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            // Check if the target exists before trying to scroll
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Smooth scroll to the target section
                });
                // Close mobile menu if open after clicking a link
                const navList = document.querySelector('.nav-list');
                const mobileMenu = document.getElementById('mobile-menu');
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    mobileMenu.classList.remove('active'); // Also toggle the hamburger icon state
                }
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) { // Ensure elements exist before adding listeners
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Toggle class on button for hamburger animation
        });
    }

    // --- Dynamic Role Text Switching ---
    const roles = [ "Front-end Developer.", "Back-end Developer.", "Full-Stack Developer.", "SoftWare Developer.", "Freelancer."];
    let index = 0;
    const roleText = document.getElementById("role-text");

    function switchRole() {
        if (!roleText) return; // Exit if element not found

        index = (index + 1) % roles.length;
        roleText.style.opacity = 0; // Fade out

        setTimeout(() => {
            roleText.textContent = roles[index];
            roleText.style.opacity = 1; // Fade in
        }, 500); // Duration of fade-out before changing text
    }

    if (roleText) { // Only start if the element exists
        switchRole(); // Call once immediately to set initial text
        setInterval(switchRole, 2200); // Interval for switching roles
    }


    // --- particles.js background initialization ---
    // Make sure particlesJS is loaded before calling it
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 110, density: { enable: true, value_area: 700 } },
                color: { value: '#ffffff' }, // Particles are white
                shape: { type: 'star' },
                opacity: { value: 0.5, random: false },
                size: { value: 4, random: true },
                line_linked: {
                    enable: true,
                    distance: 170, // Distance between particles
                    color: '#ffffff', // Lines are white
                    opacity: 0.6,
                    width: 0.5
                },
                move: {
                    enable: true,
                    speed: 8, // Adjust speed as desired
                    direction: 'none',
                    random: false, // Set to true for more chaotic movement
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 200, line_linked: { opacity: 1 } },
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 30 },
                    repulse: { distance: 300, duration: 1.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
        });
    } else {
        console.warn("particles.js library not loaded. Particle background will not appear.");
    }
});