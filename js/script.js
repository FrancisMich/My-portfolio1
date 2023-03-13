        // hamburger navbar configure
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};
        
        // switch navbar active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop - 148;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

        // remove toggled navbar when clicked
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

        // SCroll reveal     
    ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',
    {origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

        // typed js
    const typed = new Typed ('.my-works', {
        strings: ['Full Stack Developer', 'Technical Writer', 'Digital Marketer'],
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });


