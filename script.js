// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Set the wedding date (June 15, 2026)
const weddingDate = new Date('November 21, 2026 8:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "We are married!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();



// Remove splash screen from DOM after animation finishes
// The timeout (4000ms) matches the CSS animation duration (3.5s + 0.5s buffer)
setTimeout(() => {
    const splash = document.getElementById('splash-curtain');
    if (curtain) {
        curtain.remove();
    }
}, 4000);