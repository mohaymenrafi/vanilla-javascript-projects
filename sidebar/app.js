const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');

const handleClick = () => {
  menu.classList.toggle('visible');
  console.log(menu.classList);
};

hamburger.addEventListener('click', handleClick);
closeMenu.addEventListener('click', handleClick);
