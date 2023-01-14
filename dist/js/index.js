const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

menuLinks.forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('active');
}));