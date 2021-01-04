let menuToggler = document.querySelector('.menu-toggle');
let bars = document.querySelector('#barra');
let menuClose = document.querySelector('.nav-close');
let nav = document.querySelector('.nav-bar');
let body = document.querySelector('body');
let over = document.querySelector('.overlay');

menuToggler.addEventListener('click', function() {
    nav.classList.toggle('active');
    body.classList.toggle('fixed-position');
    over.classList.toggle('menu-open');
    bars.style.display = 'none'
    menuClose.style.display ='block'
});

menuClose.addEventListener("click", () => {
    nav.classList.toggle('active');
    body.classList.remove('fixed-position');
    over.classList.toggle('menu-open');
    bars.style.display = 'block';
    menuClose.style.display ='none'
})