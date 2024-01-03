document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const cross = document.querySelector('.close');
    const navBar = document.querySelector('.header ul');
    const mobileMenu = document.querySelector('.mobile-nav');
    menu.addEventListener('click', () => {
        navBar.classList.toggle('open');
        menu.classList.toggle('menu-bar');
        cross.classList.toggle('show');
        mobileMenu.classList.toggle('is-active');
    });
    cross.addEventListener('click', () => {
        navBar.classList.toggle('open');
        menu.classList.toggle('menu-bar');
        cross.classList.toggle('show');
        mobileMenu.classList.toggle('is-active');
    });
});