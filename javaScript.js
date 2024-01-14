const menuIcon = document.querySelector('.menu');
const desplegarMenu = document.querySelector('.menu-mobile-desplegable');


menuIcon.addEventListener('click', toggleDesplegarMenu);

function toggleDesplegarMenu() {
    desplegarMenu.classList.toggle('inactive');
}