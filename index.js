const menuBackground = document.querySelector('.menu-bg');
const burgerButton = document.querySelector('.hamb-button');
const burgerMenu = document.querySelector('.hamb-menu');

burgerButton.addEventListener('click', () => {
	burgerMenu.classList.toggle('hamb-menu--openned');
	menuBackground.classList.toggle('menu-bg--openned');
});
