const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Graphic Design', 'UI/UX Design', 'Digital Marketer', 'Youtuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})