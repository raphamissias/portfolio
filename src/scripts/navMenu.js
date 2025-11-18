const button = document.querySelector('#nav-button');
const menu = document.querySelector('.nav-content');

const showMenu = () => {
    button.addEventListener('click', () => {
        menu.classList.toggle("max-sm:hidden");
        menu.classList.toggle("max-sm:flex");
    })
}

showMenu();