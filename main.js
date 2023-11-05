window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.home-text h2', {delay: 200, origin: 'left'});
ScrollReveal().reveal('.home-text h3', {delay: 200, origin: 'right'});
ScrollReveal().reveal('.home-img', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.home-img img', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.home-text p', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.home .scroll-down', {delay: 400, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.heading', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.about-data span', {delay: 800});
ScrollReveal().reveal('.about-data h2', {delay: 450, origin: 'left'});
ScrollReveal().reveal('.about-text p', {delay: 450, origin: 'right', interval: 200});
ScrollReveal().reveal('.skill-container h2', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.bars li', {delay: 300, origin: 'top', interval: 500});
ScrollReveal().reveal('.contact-container h2', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.contact-content h2', {delay: 300, origin: 'right'});
ScrollReveal().reveal('.contact-left li', {delay: 300, origin: 'left', interval: 300});
ScrollReveal().reveal('.contact-right input, textarea, button', {delay: 300, origin: 'bottom', interval: 100});